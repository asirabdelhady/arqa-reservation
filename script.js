const canvas = document.getElementById('reservationCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'images/Reservation.jpg'; // Path to your image

// Initial text positions
let namePosition = { x: 100, y: 100 };
let phonePosition = { x: 100, y: 200 };
let datePosition = { x: 100, y: 300 };

// Track which text is being dragged
let draggingText = null;
let offsetX, offsetY;

// Load the image and draw it on the canvas
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    drawCanvas();
};

// Function to draw the image and the text
function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);  // Draw the background image

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';

    // Draw the text on top of the image
    ctx.fillText(name, namePosition.x, namePosition.y);
    ctx.fillText(phone, phonePosition.x, phonePosition.y);
    ctx.fillText(date, datePosition.x, datePosition.y);
}

// Mouse events for dragging the text
canvas.addEventListener('mousedown', function(e) {
    const mousePos = getMousePos(canvas, e);

    if (isMouseOverText(mousePos, namePosition)) {
        draggingText = 'name';
        offsetX = mousePos.x - namePosition.x;
        offsetY = mousePos.y - namePosition.y;
    } else if (isMouseOverText(mousePos, phonePosition)) {
        draggingText = 'phone';
        offsetX = mousePos.x - phonePosition.x;
        offsetY = mousePos.y - phonePosition.y;
    } else if (isMouseOverText(mousePos, datePosition)) {
        draggingText = 'date';
        offsetX = mousePos.x - datePosition.x;
        offsetY = mousePos.y - datePosition.y;
    }
});

canvas.addEventListener('mousemove', function(e) {
    if (draggingText) {
        const mousePos = getMousePos(canvas, e);

        if (draggingText === 'name') {
            namePosition.x = mousePos.x - offsetX;
            namePosition.y = mousePos.y - offsetY;
        } else if (draggingText === 'phone') {
            phonePosition.x = mousePos.x - offsetX;
            phonePosition.y = mousePos.y - offsetY;
        } else if (draggingText === 'date') {
            datePosition.x = mousePos.x - offsetX;
            datePosition.y = mousePos.y - offsetY;
        }

        drawCanvas();  // Redraw the canvas with the updated text position
    }
});

canvas.addEventListener('mouseup', function() {
    draggingText = null;
});

// Helper function to get mouse position relative to the canvas
function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

// Helper function to check if the mouse is over the text
function isMouseOverText(mousePos, textPos) {
    const textWidth = ctx.measureText(document.getElementById(draggingText).value).width;
    const textHeight = 30; // Adjust this based on font size
    return mousePos.x >= textPos.x && mousePos.x <= textPos.x + textWidth &&
           mousePos.y >= textPos.y - textHeight && mousePos.y <= textPos.y;
}

// Function to print only the canvas
function printCanvas() {

    window.print();
    // const dataUrl = canvas.toDataURL('image/png');
    // const printWindow = window.open('', '', 'width=800,height=600');
    
    // printWindow.document.open();
    // printWindow.document.write(`
    //     <html>
    //     <head>
    //         <title>Print Canvas</title>
    //         <style>
    //             body {
    //                 margin: 0;
    //                 padding: 0;
    //             }
    //             img {
    //                 display: block;
    //                 width: 100%;
    //             }
    //         </style>
    //     </head>
    //     <body>
    //         <img src="${dataUrl}" />
    //         <script>
    //             window.onload = function() {
    //                 window.print();
    //                 window.onafterprint = function() {
    //                     window.close();
    //                 };
    //             };
    //         </script>
    //     </body>
    //     </html>
    // `);
    // printWindow.document.close();
}
