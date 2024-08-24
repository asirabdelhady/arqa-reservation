const canvas = document.getElementById('reservationCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
//comment
// Define the positions for the checkboxes (adjust these for correct positioning)
const tujariPosition = { x: 942, y: 505 };  // Example position for نجاري
const idariPosition = { x: 2443, y: 505 };   // Example position for اداري
const tibiPosition = { x: 1693, y: 505 };    // Example position for طبي
const insideEgyptPosition = { x: 2015, y: 1205 };    // Example position for طبي
const outsideEgyptPosition = { x: 842, y: 1205 };    // Example position for طبي
const websitePosition = { x: 350, y: 763 };  // Example position for نجاري
const facebookPosition = { x: 800, y: 763 };   // Example position for اداري
const headofficePosition = { x: 1285, y: 763 };    // Example position for طبي
const brokerPosition = { x: 1645, y: 763 };    // Example position for طبي
const otherPosition = { x: 1972, y: 763 };
const shopDetailsPostition = {x: 2465, y: 1435 }
const officeDetailsPosition = {x: 1775, y: 1435 }
const clinicDetailsPosition = {x: 1040, y: 1435 }
const otherDetailsPosition = {x: 1330, y: 890 }


// Define the positions in pixels (these will be scaled for print preview)
const namePosition = { x: 2030, y: 540 };  // Adjust this for correct positioning
const phonePosition = { x: 900, y: 540 }; // Adjust this for correct positioning
const datePosition = { x: 263, y: 550 };  // Adjust this for correct positioning
const occupationPosition = { x: 2030, y: 630 };  // Adjust this for correct positioning
const emailPosition = { x: 900, y: 630 };  // Adjust this for correct positioning
const otherHowPosition = { x: 1330, y: 800 };  // Adjust this for correct positioning
const brokerNamePosition = { x: 1020, y: 890 };  // Adjust this for correct positioning
const companyNamePosition = { x: 2145, y: 980};  // Adjust this for correct positioning
const companyCodePosition = { x: 685, y: 980};  // Adjust this for correct positioning
const crmCodePosition = { x: 2145, y: 1060};  // Adjust this for correct positioning
const financeCodePosition = { x: 685, y: 1060};  // Adjust this for correct positioning
const otherDetailsInputPosition = { x: 1330, y: 890 };  // Adjust this for correct positioning



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').addEventListener('input', updateCanvas);
    document.getElementById('phone').addEventListener('input', updateCanvas);
    document.getElementById('date').addEventListener('input', updateCanvas);
    document.getElementById('occupation').addEventListener('input', updateCanvas);
    document.getElementById('email').addEventListener('input', updateCanvas);
    document.getElementById('otherHow').addEventListener('input', updateCanvas);
    document.getElementById('brokerName').addEventListener('input', updateCanvas);
    document.getElementById('companyName').addEventListener('input', updateCanvas);
    document.getElementById('companyCode').addEventListener('input', updateCanvas);
    document.getElementById('crmCode').addEventListener('input', updateCanvas);
    document.getElementById('financeCode').addEventListener('input', updateCanvas);

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
    const occupation = document.getElementById('occupation').value;
    const email = document.getElementById('email').value;
    const otherHow = document.getElementById('otherHow').value;
    const brokerName = document.getElementById('brokerName').value;
    const companyName = document.getElementById('companyName').value;
    const companyCode = document.getElementById('companyCode').value;
    const crmCode = document.getElementById('crmCode').value;
    const financeCode = document.getElementById('financeCode').value;
    const otherDetailsInput = document.getElementById('otherDetailsInput').value;


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
    const scaledOccupationPosition = {
        x: calculatePosition(occupationPosition.x, canvas.width, img.width),
        y: calculatePosition(occupationPosition.y, canvas.height, img.height) + offset
    };
    const scaledEmailPosition = {
        x: calculatePosition(emailPosition.x, canvas.width, img.width),
        y: calculatePosition(emailPosition.y, canvas.height, img.height) + offset
    }
    const scaledOtherHowPosition = {
        x: calculatePosition(otherHowPosition.x, canvas.width, img.width),
        y: calculatePosition(otherHowPosition.y, canvas.height, img.height) + offset
    }
    const scaledBrokerNamePosition = {
        x: calculatePosition(brokerNamePosition.x, canvas.width, img.width),
        y: calculatePosition(brokerNamePosition.y, canvas.height, img.height) + offset
    }
    const scaledCompanyNamePosition = {
        x: calculatePosition(companyNamePosition.x, canvas.width, img.width),
        y: calculatePosition(companyNamePosition.y, canvas.height, img.height) + offset
    }
    const scaledCompanyCodePosition = {
        x: calculatePosition(companyCodePosition.x, canvas.width, img.width),
        y: calculatePosition(companyCodePosition.y, canvas.height, img.height) + offset
    }
    const scaledCrmCodePosition = {
        x: calculatePosition(crmCodePosition.x, canvas.width, img.width),
        y: calculatePosition(crmCodePosition.y, canvas.height, img.height) + offset
    }
    const scaledFinanceCodePosition = {
        x: calculatePosition(financeCodePosition.x, canvas.width, img.width),
        y: calculatePosition(financeCodePosition.y, canvas.height, img.height) + offset
    }
    const scaledOtherDetailsInputPosition = {
        x: calculatePosition(otherDetailsInputPosition.x, canvas.width, img.width),
        y: calculatePosition(otherDetailsInputPosition.y, canvas.height, img.height) + offset
    }
  


    ctx.font = '36px Arial'; // Text size on canvas
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'; // Right-align the text for Arabic
    ctx.direction = 'rtl';

    ctx.fillText(name, scaledNamePosition.x, scaledNamePosition.y);
    ctx.fillText(phone, scaledPhonePosition.x, scaledPhonePosition.y);
    ctx.fillText(date, scaledDatePosition.x, scaledDatePosition.y);
    ctx.fillText(occupation, scaledOccupationPosition.x, scaledOccupationPosition.y);
    ctx.fillText(email, scaledEmailPosition.x, scaledEmailPosition.y);
    ctx.fillText(otherHow, scaledOtherHowPosition.x, scaledOtherHowPosition.y);
    ctx.fillText(brokerName, scaledBrokerNamePosition.x, scaledBrokerNamePosition.y);
    ctx.fillText(companyName, scaledCompanyNamePosition.x, scaledCompanyNamePosition.y);
    ctx.fillText(companyCode, scaledCompanyCodePosition.x, scaledCompanyCodePosition.y);
    ctx.fillText(crmCode, scaledCrmCodePosition.x, scaledCrmCodePosition.y);
    ctx.fillText(financeCode, scaledFinanceCodePosition.x, scaledFinanceCodePosition.y);
    ctx.fillText(otherDetailsInput, scaledOtherDetailsInputPosition.x, scaledOtherDetailsInputPosition.y);

    // Check the state of the checkboxes
    const isTujariChecked = document.getElementById('tujari').checked;
    const isIdariChecked = document.getElementById('idari').checked;
    const isTibiChecked = document.getElementById('tibi').checked;
    const isInsideEgyptChecked = document.getElementById('insideEgypt').checked;
    const isOutsideEgyptChecked = document.getElementById('outsideEgypt').checked;
    const isWebsiteChecked = document.getElementById('website').checked;
    const isFacebookChecked = document.getElementById('facebook').checked;
    const isHeadofficeChecked = document.getElementById('headoffice').checked;
    const isBrokerChecked = document.getElementById('broker').checked;
    const isOtherChecked = document.getElementById('other').checked;
    const brokerNameField = document.getElementById('brokerNameField');
    const otherHowField = document.getElementById('otherHowField');
    const otherDetailsField = document.getElementById('otherDetailsFields');
    const isShopDeatilsChecked = document.getElementById('shopDetails').checked;
    const isOfficeDetailsChecked = document.getElementById('officeDetails').checked;
    const isClinicDetailsChecked = document.getElementById('clinicDetails').checked;
    const isOtherDetailsChecked = document.getElementById('otherDetails').checked;




    // Draw tick marks if checkboxes are selected
    ctx.font = '80px Arial';  // Larger font for the tick mark
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
    if (isInsideEgyptChecked) {
        const scaledInsideEgyptPosition = {
            x: calculatePosition(insideEgyptPosition.x, canvas.width, img.width),
            y: calculatePosition(insideEgyptPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledInsideEgyptPosition.x, scaledInsideEgyptPosition.y);
    }
    if (isOutsideEgyptChecked) {
        const scaledOutsideEgyptPosition = {
            x: calculatePosition(outsideEgyptPosition.x, canvas.width, img.width),
            y: calculatePosition(outsideEgyptPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledOutsideEgyptPosition.x, scaledOutsideEgyptPosition.y);
    }
    if (isWebsiteChecked) {
        const scaledWebsitePosition = {
            x: calculatePosition(websitePosition.x, canvas.width, img.width),
            y: calculatePosition(websitePosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledWebsitePosition.x, scaledWebsitePosition.y);
    }
    if (isFacebookChecked) {
        const scaledFacebookPosition = {
            x: calculatePosition(facebookPosition.x, canvas.width, img.width),
            y: calculatePosition(facebookPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledFacebookPosition.x, scaledFacebookPosition.y);
    }
    if (isHeadofficeChecked) {
        const scaledHeadofficePosition = {
            x: calculatePosition(headofficePosition.x, canvas.width, img.width),
            y: calculatePosition(headofficePosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledHeadofficePosition.x, scaledHeadofficePosition.y);
    }
    if (isBrokerChecked) {
        brokerNameField.style.display = 'block';
        const scaledBrokerPosition = {
            x: calculatePosition(brokerPosition.x, canvas.width, img.width),
            y: calculatePosition(brokerPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledBrokerPosition.x, scaledBrokerPosition.y);
    }else{
        brokerNameField.style.display = 'none';
    }
    if (isOtherChecked) {
        otherHowField.style.display = 'block';
        const scaledOtherPosition = {
            x: calculatePosition(otherPosition.x, canvas.width, img.width),
            y: calculatePosition(otherPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledOtherPosition.x, scaledOtherPosition.y);
    }else{
        otherHowField.style.display = 'none';
    }

    if (isShopDeatilsChecked) {
        const scaledShopDetails = {
            x: calculatePosition(shopDetailsPostition.x, canvas.width, img.width),
            y: calculatePosition(shopDetailsPostition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledShopDetails.x, scaledShopDetails.y);
    }
    if (isOfficeDetailsChecked) {
        const scaledOfficeDetails = {
            x: calculatePosition(officeDetailsPosition.x, canvas.width, img.width),
            y: calculatePosition(officeDetailsPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledOfficeDetails.x, scaledOfficeDetails.y);
    }
    if (isClinicDetailsChecked) {
        const scaledClinicDetails = {
            x: calculatePosition(clinicDetailsPosition.x, canvas.width, img.width),
            y: calculatePosition(clinicDetailsPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledClinicDetails.x, scaledClinicDetails.y);
    }
    if (isOtherDetailsChecked) {
        otherDetailsField.style.display = 'block';
        const scaledOtherDetails = {
            x: calculatePosition(otherDetailsPosition.x, canvas.width, img.width),
            y: calculatePosition(otherDetailsPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledOtherDetails.x, scaledOtherDetails.y);
    }else{
        otherDetailsField.style.display = 'none';
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
    const occupation = document.getElementById('occupation').value;
    const email = document.getElementById('email').value;
    const otherHow = document.getElementById('otherHow').value;
    const brokerName = document.getElementById('brokerName').value;
    const companyName = document.getElementById('companyName').value;
    const companyCode = document.getElementById('companyCode').value;
    const crmCode = document.getElementById('crmCode').value;
    const financeCode = document.getElementById('financeCode').value;
    const otherDetailsInput = document.getElementById('otherDetailsInput').value;

    const isTujariChecked = document.getElementById('tujari').checked;
    const isIdariChecked = document.getElementById('idari').checked;
    const isTibiChecked = document.getElementById('tibi').checked;
    const isInsideEgyptChecked = document.getElementById('insideEgypt').checked;
    const isOutsideEgyptChecked = document.getElementById('outsideEgypt').checked;
    const isWebsiteChecked = document.getElementById('website').checked;
    const isFacebookChecked = document.getElementById('facebook').checked;
    const isHeadofficeChecked = document.getElementById('headoffice').checked;
    const isBrokerChecked = document.getElementById('broker').checked;
    const isOtherChecked = document.getElementById('other').checked;
    const isShopDeatilsChecked = document.getElementById('shopDetails').checked;
    const isOfficeDetailsChecked = document.getElementById('officeDetails').checked;
    const isClinicDetailsChecked = document.getElementById('clinicDetails').checked;
    const isOtherDetailsChecked = document.getElementById('otherDetails').checked;


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
    const scaledOccupationPosition = {
        x: occupationPosition.x * canvasToMMFactorX,
        y: occupationPosition.y * canvasToMMFactorY
    }
    const scaledEmailPosition = {
        x: emailPosition.x * canvasToMMFactorX,
        y: emailPosition.y * canvasToMMFactorY
    }
    const scaledOtherHowPosition = {
        x: otherHowPosition.x * canvasToMMFactorX,
        y: otherHowPosition.y * canvasToMMFactorY
    }
    const scaledBrokerNamePosition = {
        x: brokerNamePosition.x * canvasToMMFactorX,
        y: brokerNamePosition.y * canvasToMMFactorY
    }
    const scaledCompanyNamePosition = {
        x: companyNamePosition.x * canvasToMMFactorX,
        y: companyNamePosition.y * canvasToMMFactorY
    }
    const scaledCompanyCodePosition = {
        x: companyCodePosition.x * canvasToMMFactorX,
        y: companyCodePosition.y * canvasToMMFactorY
    }
    const scaledCrmCodePosition = {
        x: crmCodePosition.x * canvasToMMFactorX,
        y: crmCodePosition.y * canvasToMMFactorY
    }
    const scaledFinanceCodePosition = {
        x: financeCodePosition.x * canvasToMMFactorX,
        y: financeCodePosition.y * canvasToMMFactorY
    }
    const scaledOtherDetailsInputPosition = {
        x: otherDetailsInputPosition.x * canvasToMMFactorX,
        y: otherDetailsInputPosition.y * canvasToMMFactorY
    }



    const scaledTujariPosition = { 
        x: tujariPosition.x * canvasToMMFactorX - 5, 
        y: tujariPosition.y * canvasToMMFactorY - 7
    };
    const scaledIdariPosition = { 
        x: idariPosition.x * canvasToMMFactorX - 5, 
        y: idariPosition.y * canvasToMMFactorY - 7
    };
    const scaledTibiPosition = { 
        x: tibiPosition.x * canvasToMMFactorX - 5, 
        y: tibiPosition.y * canvasToMMFactorY - 7
    };
    const scaledInsideEgyptPosition = {
        x: insideEgyptPosition.x * canvasToMMFactorX - 5,
        y: insideEgyptPosition.y * canvasToMMFactorY - 7
    }
    const scaledOutsideEgyptPosition = {
        x: outsideEgyptPosition.x * canvasToMMFactorX - 5,
        y: outsideEgyptPosition.y * canvasToMMFactorY - 7
    }
    const scaledWebsitePosition = {
        x: websitePosition.x * canvasToMMFactorX - 5,
        y: websitePosition.y * canvasToMMFactorY - 7
    }
    const scaledFacebookPosition = {
        x: facebookPosition.x * canvasToMMFactorX - 5,
        y: facebookPosition.y * canvasToMMFactorY - 7
    }
    const scaledHeadofficePosition = {
        x: headofficePosition.x * canvasToMMFactorX - 5,
        y: headofficePosition.y * canvasToMMFactorY - 7
    }
    const scaledBrokerPosition = {
        x: brokerPosition.x * canvasToMMFactorX - 5,
        y: brokerPosition.y * canvasToMMFactorY - 7
    }
    const scaledOtherPosition = {
        x: otherPosition.x * canvasToMMFactorX - 5,
        y: otherPosition.y * canvasToMMFactorY - 7
    }
    const scaledShopDetails = {
        x: shopDetailsPostition.x * canvasToMMFactorX - 5,
        y: shopDetailsPostition.y * canvasToMMFactorY - 7
    }
    const scaledOfficeDetails = {
        x: officeDetailsPosition.x * canvasToMMFactorX - 5,
        y: officeDetailsPosition.y * canvasToMMFactorY - 7
    }
    const scaledClinicDetails = {
        x: clinicDetailsPosition.x * canvasToMMFactorX - 5,
        y: clinicDetailsPosition.y * canvasToMMFactorY - 7
    }
    const scaledOtherDetails = {
        x: otherDetailsPosition.x * canvasToMMFactorX - 5,
        y: otherDetailsPosition.y * canvasToMMFactorY - 7
    }

    // Scaling factor for font size (from pixel to mm conversion)
    const   pixelToMMFactor = 0.2646; // 1 pixel ≈ 0.2646 mm

    const printFontSizeMM = 11 * pixelToMMFactor; // Scale the font size used on canvas
    const tickFontSizeMM = 25 * pixelToMMFactor; // Adjust the tick mark size

    printWindow = window.open();
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
                #occupationText { top: ${scaledOccupationPosition.y}mm; right: ${canvasWidthMM - scaledOccupationPosition.x}mm; }
                #emailText { top: ${scaledEmailPosition.y}mm; right: ${canvasWidthMM - scaledEmailPosition.x}mm; }
                #otherHowText { top: ${scaledOtherHowPosition.y}mm; right: ${canvasWidthMM - scaledOtherHowPosition.x}mm; }
                #brokerNameText { top: ${scaledBrokerNamePosition.y}mm; right: ${canvasWidthMM - scaledBrokerNamePosition.x}mm; }
                #companyNameText { top: ${scaledCompanyNamePosition.y}mm; right: ${canvasWidthMM - scaledCompanyNamePosition.x}mm; }
                #companyCodeText { top: ${scaledCompanyCodePosition.y}mm; right: ${canvasWidthMM - scaledCompanyCodePosition.x}mm; }
                #crmCodeText { top: ${scaledCrmCodePosition.y}mm; right: ${canvasWidthMM - scaledCrmCodePosition.x}mm; }
                #financeCodeText { top: ${scaledFinanceCodePosition.y}mm; right: ${canvasWidthMM - scaledFinanceCodePosition.x}mm; }
                #otherDetailsInputText { top: ${scaledOtherDetailsInputPosition.y}mm; right: ${canvasWidthMM - scaledOtherDetailsInputPosition.x}mm; }
                


                #tujariTick { top: ${scaledTujariPosition.y}mm; left: ${scaledTujariPosition.x}mm; }
                #idariTick { top: ${scaledIdariPosition.y}mm; left: ${scaledIdariPosition.x}mm; }
                #tibiTick { top: ${scaledTibiPosition.y}mm; left: ${scaledTibiPosition.x}mm; }
                #insideEgyptTick { top: ${scaledInsideEgyptPosition.y}mm; left: ${scaledInsideEgyptPosition.x}mm; }
                #outsideEgyptTick { top: ${scaledOutsideEgyptPosition.y}mm; left: ${scaledOutsideEgyptPosition.x}mm; }
                #websiteTick { top: ${scaledWebsitePosition.y}mm; left: ${scaledWebsitePosition.x}mm; }
                #facebookTick { top: ${scaledFacebookPosition.y}mm; left: ${scaledFacebookPosition.x}mm; }
                #headofficeTick { top: ${scaledHeadofficePosition.y}mm; left: ${scaledHeadofficePosition.x}mm; }
                #brokerTick { top: ${scaledBrokerPosition.y}mm; left: ${scaledBrokerPosition.x}mm; }
                #otherTick { top: ${scaledOtherPosition.y}mm; left: ${scaledOtherPosition.x}mm; }
                #shopDetailsTick { top: ${scaledShopDetails.y}mm; left: ${scaledShopDetails.x}mm; }
                #officeDetailsTick { top: ${scaledOfficeDetails.y}mm; left: ${scaledOfficeDetails.x}mm; }
                #clinicDetailsTick { top: ${scaledClinicDetails.y}mm; left: ${scaledClinicDetails.x}mm; }
                #otherDetailsTick { top: ${scaledOtherDetails.y}mm; left: ${scaledOtherDetails.x}mm; }


            </style>
        </head>
        <body>
            <div class="canvas">
                <div id="nameText" class="text">${name}</div>
                <div id="phoneText" class="text">${phone}</div>
                <div id="dateText" class="text">${date}</div>
                <div id="occupationText" class="text">${occupation}</div>
                <div id="emailText" class="text">${email}</div>
                <div id="otherHowText" class="text">${otherHow}</div>
                <div id="brokerNameText" class="text">${brokerName}</div>
                <div id="companyNameText" class="text">${companyName}</div>
                <div id="companyCodeText" class="text">${companyCode}</div>
                <div id="crmCodeText" class="text">${crmCode}</div>
                <div id="financeCodeText" class="text">${financeCode}</div>
                <div id="otherDetailsInputText" class="text">${otherDetailsInput}</div>

                ${isTujariChecked ? `<div id="tujariTick" class="tick">✔</div>` : ''}
                ${isIdariChecked ? `<div id="idariTick" class="tick">✔</div>` : ''}
                ${isTibiChecked ? `<div id="tibiTick" class="tick">✔</div>` : ''}
                ${isInsideEgyptChecked ? `<div id="insideEgyptTick" class="tick">✔</div>` : ''}
                ${isOutsideEgyptChecked ? `<div id="outsideEgyptTick" class="tick">✔</div>` : ''}
                ${isWebsiteChecked ? `<div id="websiteTick" class="tick">✔</div>` : ''}
                ${isFacebookChecked ? `<div id="facebookTick" class="tick">✔</div>` : ''}
                ${isHeadofficeChecked ? `<div id="headofficeTick" class="tick">✔</div>` : ''}
                ${isBrokerChecked ? `<div id="brokerTick" class="tick">✔</div>` : ''}
                ${isOtherChecked ? `<div id="otherTick" class="tick">✔</div>` : ''}
                ${isShopDeatilsChecked ? `<div id="shopDetailsTick" class="tick">✔</div>` : ''}
                ${isOfficeDetailsChecked ? `<div id="officeDetailsTick" class="tick">✔</div>` : ''}
                ${isClinicDetailsChecked ? `<div id="clinicDetailsTick" class="tick">✔</div>` : ''}
                ${isOtherDetailsChecked ? `<div id="otherDetailsTick" class="tick">✔</div>` : ''}


            </div>
            <script>
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}