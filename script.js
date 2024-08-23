const canvas = document.getElementById('reservationCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();

// Define the positions for the checkboxes (adjust these for correct positioning)
const tujariPosition = { x: 942, y: 505 };  // Example position for نجاري
const idariPosition = { x: 2443, y: 505 };   // Example position for اداري
const tibiPosition = { x: 1693, y: 505 };    // Example position for طبي

// Define the positions in pixels (these will be scaled for print preview)
const namePosition = { x: 2030, y: 540 };  // Adjust this for correct positioning
const phonePosition = { x: 900, y: 540 }; // Adjust this for correct positioning
const datePosition = { x: 263, y: 550 };  // Adjust this for correct positioning

// Define the positions for the checkboxes (adjust these for correct positioning)
const websitePosition = { x: 942, y: 505 };  // Example position for نجاري
const facebookPosition = { x: 2443, y: 505 };   // Example position for اداري
const headofficePosition = { x: 1693, y: 505 };    // Example position for طبي
const brokerPosition = { x: 1693, y: 505 };    // Example position for طبي
const otherPosition = { x: 1693, y: 505 };    // Example position for طبي


const optionsPositions = [
    { x: 350, y: 763 }, // Option 1 position
    { x: 800, y: 763 }, // Option 2 position
    { x: 1285, y: 763 }, // Option 3 position
    { x: 1645, y: 763 }, // Option 4 position
    { x: 1972, y: 763 }  // Option 5 position
];


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

    ctx.font = '36px Arial'; // Text size on canvas
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'; // Right-align the text for Arabic
    ctx.direction = 'rtl';

    ctx.fillText(name, scaledNamePosition.x, scaledNamePosition.y);
    ctx.fillText(phone, scaledPhonePosition.x, scaledPhonePosition.y);
    ctx.fillText(date, scaledDatePosition.x, scaledDatePosition.y);

    // Check the state of the checkboxes
    const isTujariChecked = document.getElementById('tujari').checked;
    const isIdariChecked = document.getElementById('idari').checked;
    const isTibiChecked = document.getElementById('tibi').checked;

    // Draw tick marks if checkboxes are selected
    ctx.font = '40px Arial';  // Larger font for the tick mark
    ctx.fillStyle = 'green';   // Tick mark color

    if (isTujariChecked) {
        const scaledTujariPosition = {
            x: calculatePosition(tujariPosition.x, canvas.width, img.width),
            y: calculatePosition(tujariPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledTujariPosition.x, scaledTujariPosition.y);
    }

    if (isIdariChecked) {
        const scaledIdariPosition = {
            x: calculatePosition(idariPosition.x, canvas.width, img.width),
            y: calculatePosition(idariPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledIdariPosition.x, scaledIdariPosition.y);
    }

    if (isTibiChecked) {
        const scaledTibiPosition = {
            x: calculatePosition(tibiPosition.x, canvas.width, img.width),
            y: calculatePosition(tibiPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledTibiPosition.x, scaledTibiPosition.y);
    }


    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(`option${i}`).checked) {
            const position = optionsPositions[i - 1];
            const scaledPosition = {
                x: calculatePosition(position.x, canvas.width, img.width),
                y: calculatePosition(position.y, canvas.height, img.height)
            };
            ctx.font = '40px Arial'; // Adjust the font size for tick mark
            ctx.fillText('✔', scaledPosition.x, scaledPosition.y); // Render tick mark
        }
    }
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

    const isTujariChecked = document.getElementById('tujari').checked;
    const isIdariChecked = document.getElementById('idari').checked;
    const isTibiChecked = document.getElementById('tibi').checked;

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

    const scaledTujariPosition = { 
        x: tujariPosition.x * canvasToMMFactorX - 3, 
        y: tujariPosition.y * canvasToMMFactorY - 4
    };
    const scaledIdariPosition = { 
        x: idariPosition.x * canvasToMMFactorX - 3, 
        y: idariPosition.y * canvasToMMFactorY - 4
    };
    const scaledTibiPosition = { 
        x: tibiPosition.x * canvasToMMFactorX - 3, 
        y: tibiPosition.y * canvasToMMFactorY - 4
    };

    // Scaling factor for font size (from pixel to mm conversion)
    const   pixelToMMFactor = 0.2646; // 1 pixel ≈ 0.2646 mm

    const printFontSizeMM = 11 * pixelToMMFactor; // Scale the font size used on canvas
    const tickFontSizeMM = 16 * pixelToMMFactor; // Adjust the tick mark size

    const scaledOptionsPositions = optionsPositions.map(position => ({
        x: position.x * canvasToMMFactorX,
        y: position.y * canvasToMMFactorY - 3
    }));

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
                .tick {
                    position: absolute;
                    color: green;
                    font-size: ${tickFontSizeMM}mm; /* Size of the tick mark */
                    font-family: Arial, sans-serif;
                }
                #nameText { top: ${scaledNamePosition.y}mm; right: ${canvasWidthMM - scaledNamePosition.x}mm; }
                #phoneText { top: ${scaledPhonePosition.y}mm; right: ${canvasWidthMM - scaledPhonePosition.x}mm; }
                #dateText { top: ${scaledDatePosition.y}mm; right: ${canvasWidthMM - scaledDatePosition.x}mm; }
                #tujariTick { top: ${scaledTujariPosition.y}mm; left: ${scaledTujariPosition.x}mm; }
                #idariTick { top: ${scaledIdariPosition.y}mm; left: ${scaledIdariPosition.x}mm; }
                #tibiTick { top: ${scaledTibiPosition.y}mm; left: ${scaledTibiPosition.x}mm; }

                #option1Text { top: ${scaledOptionsPositions[0].y}mm; right: ${canvasWidthMM - scaledOptionsPositions[0].x}mm; }
                #option2Text { top: ${scaledOptionsPositions[1].y}mm; right: ${canvasWidthMM - scaledOptionsPositions[1].x}mm; }
                #option3Text { top: ${scaledOptionsPositions[2].y}mm; right: ${canvasWidthMM - scaledOptionsPositions[2].x}mm; }
                #option4Text { top: ${scaledOptionsPositions[3].y}mm; right: ${canvasWidthMM - scaledOptionsPositions[3].x}mm; }
                #option5Text { top: ${scaledOptionsPositions[4].y}mm; right: ${canvasWidthMM - scaledOptionsPositions[4].x}mm; }

            </style>
        </head>
        <body>
            <div class="canvas">
                <div id="nameText" class="text">${name}</div>
                <div id="phoneText" class="text">${phone}</div>
                <div id="dateText" class="text">${date}</div>

                ${isTujariChecked ? `<div id="tujariTick" class="tick">✔</div>` : ''}
                ${isIdariChecked ? `<div id="idariTick" class="tick">✔</div>` : ''}
                ${isTibiChecked ? `<div id="tibiTick" class="tick">✔</div>` : ''}

                ${document.getElementById('option1').checked ? `<div id="option1Text" class="text">✔</div>` : ''}
                ${document.getElementById('option2').checked ? `<div id="option2Text" class="text">✔</div>` : ''}
                ${document.getElementById('option3').checked ? `<div id="option3Text" class="text">✔</div>` : ''}
                ${document.getElementById('option4').checked ? `<div id="option4Text" class="text">✔</div>` : ''}
                ${document.getElementById('option5').checked ? `<div id="option5Text" class="text">✔</div>` : ''}
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



