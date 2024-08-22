const canvas = document.getElementById('reservationCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();

// Define the positions in pixels (these will be scaled for print preview)
const namePosition = { x: 2030, y: 540 };  // Adjust this for correct positioning
const phonePosition = { x: 50, y: 100 }; // Adjust this for correct positioning
const datePosition = { x: 50, y: 150 };  // Adjust this for correct positioning

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').addEventListener('input', updateCanvas);
    document.getElementById('phone').addEventListener('input', updateCanvas);
    document.getElementById('date').addEventListener('input', updateCanvas);
});

img.src = 'images/Reservation.jpg'; // Path to your image

// Load the image and draw it on the canvas
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    drawCanvas();
};

function calculatePosition(relativePosition, canvasSize, referenceSize) {
    return (relativePosition / referenceSize) * canvasSize;
}

// Function to draw the image and the text
function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // Ensure the image scales to canvas size

    // Draw a temporary horizontal line for alignment (can be removed later)
    ctx.beginPath();
    ctx.moveTo(0, calculatePosition(namePosition.y, canvas.height, img.height));
    ctx.lineTo(canvas.width, calculatePosition(namePosition.y, canvas.height, img.height));
    //ctx.stroke();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const offset = 35; // Start with a 5-pixel offset, adjust as needed

    const scaledNamePosition = {
        x: calculatePosition(namePosition.x, canvas.width, img.width),
        y: calculatePosition(namePosition.y, canvas.height, img.height) + offset
    };
    const scaledPhonePosition = {
        x: calculatePosition(phonePosition.x, canvas.width, img.width),
        y: calculatePosition(phonePosition.y, canvas.height, img.height) + offset
    };
    const scaledDatePosition = {
        x: calculatePosition(datePosition.x, canvas.width, img.width),
        y: calculatePosition(datePosition.y, canvas.height, img.height) + offset
    };

    ctx.font = '30px Arial'; // Text size on canvas
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'; // Right-align the text for Arabic
    ctx.direction = 'rtl';

    ctx.fillText(name, scaledNamePosition.x, scaledNamePosition.y);
    ctx.fillText(phone, scaledPhonePosition.x, scaledPhonePosition.y);
    ctx.fillText(date, scaledDatePosition.x, scaledDatePosition.y);
}

// Update canvas when input fields change
function updateCanvas() {
    drawCanvas();
}

// Function to print only the canvas
function printCanvas() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    const canvasWidthMM = 210; // A4 width in mm
    const canvasHeightMM = 297; // A4 height in mm

    // Calculate scaling factors for converting pixel positions to mm
    const canvasToMMFactorX = canvasWidthMM / canvas.width;
    const canvasToMMFactorY = canvasHeightMM / canvas.height;

    const scaledNamePosition = { 
        x: namePosition.x * canvasToMMFactorX, 
        y: namePosition.y * canvasToMMFactorY 
    };
    const scaledPhonePosition = { 
        x: phonePosition.x * canvasToMMFactorX, 
        y: phonePosition.y * canvasToMMFactorY 
    };
    const scaledDatePosition = { 
        x: datePosition.x * canvasToMMFactorX, 
        y: datePosition.y * canvasToMMFactorY 
    };

    // Scaling factor for font size (from pixel to mm conversion)
    const pixelToMMFactor = 0.2646; // 1 pixel ≈ 0.2646 mm

    const printFontSizeMM = 10 * pixelToMMFactor; // Scale the font size used on canvas (30px)

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Canvas</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    -webkit-print-color-adjust: exact; /* Ensures that colors are printed accurately */
                }
                @page {
                    size: A4;
                    margin: 0;
                }
                .canvas {
                    position: relative;
                    width: ${canvasWidthMM}mm;
                    height: ${canvasHeightMM}mm;
                    background-image: url('${img.src}');
                    background-size: cover;
                    background-position: center;
                }
                .text {
                    position: absolute;
                    color: black;
                    font-size: ${printFontSizeMM}mm; /* Font size scaled for print */
                    font-family: Arial, sans-serif;
                    direction: rtl;
                    text-align: right; /* Ensure text alignment is right */
                }
                #nameText { top: ${scaledNamePosition.y}mm; right: ${canvasWidthMM - scaledNamePosition.x}mm; }
                #phoneText { top: ${scaledPhonePosition.y}mm; right: ${canvasWidthMM - scaledPhonePosition.x}mm; }
                #dateText { top: ${scaledDatePosition.y}mm; right: ${canvasWidthMM - scaledDatePosition.x}mm; }
            </style>
        </head>
        <body>
            <div class="canvas">
                <div id="nameText" class="text">${name}</div>
                <div id="phoneText" class="text">${phone}</div>
                <div id="dateText" class="text">${date}</div>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    };
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

