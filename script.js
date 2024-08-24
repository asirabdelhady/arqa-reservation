const canvas = document.getElementById('reservationCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
const centeredInputs = ['project']; // Example: input fields that should be centered

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
const projectPosition = {x: 2390, y: 1630 }
const unitCodePosition = {x: 2020, y: 1630 }
const unitSpacePosition = {x: 1650, y: 1630 }
const unitFloorPosition = {x: 1330, y: 1630 }
const unitTowerPosition = {x: 1020, y: 1630 }
const reservationPricePosition = {x: 700, y: 1630 }
const totalUnitPricePosition = {x: 1970, y: 1730 }
const numberInWordsPosition = {x: 810, y: 1730 }
const serviceDepositPosition = {x: 1960, y: 2390 }
const serviceDatePosition = {x: 680, y: 2400 }
const commentsPosition = {x: 1960, y: 2480 }
const applicantPosition = {x: 2350, y: 3325 }
const salesDependantPosition = {x: 1770, y: 3325 }
const salesSupervisorPosition = {x: 1170, y: 3325 }
const headOfSalesPosition = {x: 590, y: 3325 }
const contractPayPaymentRowPosition = {x: 2090, y: 2125 }
const monthlyInstallmentFieldPosition = {x: 410, y: 2005 }
const monthlyInstallmentPaymentRowPosition = {x: 410, y: 2125 }
const finalPaymentPaymentRowPosition = {x: 690, y: 2125 }
const forthPayPaymentRowPosition = {x: 970, y: 2125 }
const thirdPayPaymentRowPosition = {x: 1250, y: 2125 }
const secondPayPaymentRowPosition = {x: 1530, y: 2125 }
const firstPayPaymentRowPosition = {x: 1810, y: 2125 }
const monthlyInstallmentDateRowPosition = {x: 410, y: 2260 }
const finalPaymentDateRowPosition = {x: 690, y: 2260 }
const forthPayDateRowPosition = {x: 970, y: 2260 }
const thirdPayDateRowPosition = {x: 1250, y: 2260 }
const secondPayDateRowPosition = {x: 1530, y: 2260 }
const firstPayDateRowPosition = {x: 1810, y: 2260 }
const contractPayDateRowPosition = {x: 2090, y: 2295 }


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
const otherDetailsInputPosition = { x: 400, y: 1370 };  // Adjust this for correct positioning
const typeCashPosition = {x: 1910, y: 1870 }
const typeChequePosition = {x: 960, y: 1870 }



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
    document.getElementById('project').addEventListener('input', updateCanvas);
    document.getElementById('unitCode').addEventListener('input', updateCanvas);
    document.getElementById('unitSpace').addEventListener('input', updateCanvas);
    document.getElementById('unitFloor').addEventListener('input', updateCanvas);
    document.getElementById('unitTower').addEventListener('input', updateCanvas);
    document.getElementById('reservationPrice').addEventListener('input', updateCanvas);
    //document.getElementById('totalUnitPrice').addEventListener('input', updateCanvas);
    document.getElementById('numberInWords').addEventListener('input', updateCanvas);
    document.getElementById('serviceDeposit').addEventListener('input', updateCanvas);
    document.getElementById('serviceDate').addEventListener('input', updateCanvas);
    document.getElementById('comments').addEventListener('input', updateCanvas);
    document.getElementById('applicant').addEventListener('input', updateCanvas);
    document.getElementById('salesDependant').addEventListener('input', updateCanvas);
    document.getElementById('salesSupervisor').addEventListener('input', updateCanvas);
    document.getElementById('headOfSales').addEventListener('input', updateCanvas);
    document.getElementById('contractPayPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('monthlyInstallmentField').addEventListener('input', updateCanvas);
    document.getElementById('monthlyInstallmentPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('finalPaymentPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('forthPayPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('thirdPayPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('secondPayPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('firstPayPaymentRow').addEventListener('input', updateCanvas);
    document.getElementById('monthlyInstallmentDateRow').addEventListener('input', updateCanvas);
    document.getElementById('finalPaymentDateRow').addEventListener('input', updateCanvas);
    document.getElementById('forthPayDateRow').addEventListener('input', updateCanvas);
    document.getElementById('thirdPayDateRow').addEventListener('input', updateCanvas);
    document.getElementById('secondPayDateRow').addEventListener('input', updateCanvas);
    document.getElementById('firstPayDateRow').addEventListener('input', updateCanvas);
    document.getElementById('contractPayDateRow').addEventListener('input', updateCanvas);
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

function convertNumberToArabicWords(num) {
    const units = ['', 'واحد', 'اثنين', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const tens = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
    const hundreds = ['', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

    let arabicWords = '';

    if (num === 0) {
        return 'صفر';
    }

    // Hundreds
    if (Math.floor(num / 100) > 0) {
        arabicWords += hundreds[Math.floor(num / 100)] + ' ';
        num %= 100;
    }

    // Tens
    if (num >= 20) {
        arabicWords += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    } else if (num >= 10) {
        switch (num) {
            case 10:
                arabicWords += 'عشرة';
                break;
            case 11:
                arabicWords += 'أحد عشر';
                break;
            case 12:
                arabicWords += 'اثنا عشر';
                break;
            default:
                arabicWords += units[num % 10] + ' عشر';
        }
        num = 0;
    }

    // Units
    if (num > 0) {
        arabicWords += units[num] + ' ';
    }

    return arabicWords.trim();
}


// Function to draw the image and the text
function drawCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // Ensure the image scales to canvas size

    ctx.font = '36px Arial'; // Text size on canvas
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right'; // Right-align the text for Arabic
    ctx.direction = 'rtl';

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
    const project = document.getElementById('project').value;
    const unitCode = document.getElementById('unitCode').value;
    const unitSpace = document.getElementById('unitSpace').value;
    const unitFloor = document.getElementById('unitFloor').value;
    const unitTower = document.getElementById('unitTower').value;
    const reservationPrice = document.getElementById('reservationPrice').value;
    // const totalUnitPrice = document.getElementById('totalUnitPrice').value;
    const numberInWords = document.getElementById('numberInWords').value;
    const serviceDeposit = document.getElementById('serviceDeposit').value;
    const serviceDate = document.getElementById('serviceDate').value;
    const comments = document.getElementById('comments').value;
    const applicant = document.getElementById('applicant').value;
    const salesDependant = document.getElementById('salesDependant').value;
    const salesSupervisor = document.getElementById('salesSupervisor').value;
    const headOfSales = document.getElementById('headOfSales').value;
    const contractPayPaymentRow = document.getElementById('contractPayPaymentRow').value;
    const monthlyInstallmentField = document.getElementById('monthlyInstallmentField').value;
    const monthlyInstallmentPaymentRow = document.getElementById('monthlyInstallmentPaymentRow').value;
    const finalPaymentPaymentRow = document.getElementById('finalPaymentPaymentRow').value;
    const forthPayPaymentRow = document.getElementById('forthPayPaymentRow').value;
    const thirdPayPaymentRow = document.getElementById('thirdPayPaymentRow').value;
    const secondPayPaymentRow = document.getElementById('secondPayPaymentRow').value;
    const firstPayPaymentRow = document.getElementById('firstPayPaymentRow').value;
    const monthlyInstallmentDateRow = document.getElementById('monthlyInstallmentDateRow').value;
    const finalPaymentDateRow = document.getElementById('finalPaymentDateRow').value;
    const forthPayDateRow = document.getElementById('forthPayDateRow').value;
    const thirdPayDateRow = document.getElementById('thirdPayDateRow').value;
    const secondPayDateRow = document.getElementById('secondPayDateRow').value;
    const firstPayDateRow = document.getElementById('firstPayDateRow').value;
    const contractPayDateRow = document.getElementById('contractPayDateRow').value;

    //totalUnitPrice.value = 100000// Remove non-numeric characters


    //const number = parseInt(totalUnitPrice.value, 10);
    
    // if (totalUnitPrice && totalUnitPrice.value) {
    //     // Remove non-numeric characters (if needed, though the input type is number)
    //     totalUnitPrice.value = 100000 // Remove non-numeric characters

    //     // Parse the number and convert to Arabic words
    //     const number = parseInt(totalUnitPrice.value, 10);

    //     let numberInWords = '';
    //     if (!isNaN(number)) {
    //         numberInWords = convertNumberToArabicWords(number);
    //     }

    //     console.log(numberInWords); // For debugging purposes
    //     // You can update the canvas or other elements with numberInWords here
    // } else {
    //     console.error('totalUnitPrice value is not accessible or is empty.');
    // }

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
    const scaledProjectPosition = {
        x: calculatePosition(projectPosition.x, canvas.width, img.width),
        y: calculatePosition(projectPosition.y, canvas.height, img.height) + offset
    }
    const scaledUnitCodePosition = {
        x: calculatePosition(unitCodePosition.x, canvas.width, img.width),
        y: calculatePosition(unitCodePosition.y, canvas.height, img.height) + offset
    }
    const scaledUnitSpacePosition = {
        x: calculatePosition(unitSpacePosition.x, canvas.width, img.width),
        y: calculatePosition(unitSpacePosition.y, canvas.height, img.height) + offset
    }
    const scaledUnitFloorPosition = {
        x: calculatePosition(unitFloorPosition.x, canvas.width, img.width),
        y: calculatePosition(unitFloorPosition.y, canvas.height, img.height) + offset
    }
    const scaledUnitTowerPosition = {
        x: calculatePosition(unitTowerPosition.x, canvas.width, img.width),
        y: calculatePosition(unitTowerPosition.y, canvas.height, img.height) + offset
    }
    const scaledReservationPricePosition = {
        x: calculatePosition(reservationPricePosition.x, canvas.width, img.width),
        y: calculatePosition(reservationPricePosition.y, canvas.height, img.height) + offset
    }
    // const scaledTotalUnitPricePosition = {
    //     x: calculatePosition(totalUnitPricePosition.x, canvas.width, img.width),
    //     y: calculatePosition(totalUnitPricePosition.y, canvas.height, img.height) + offset
    // }
    const scaledNumberInWordsPosition = {
        x: calculatePosition(numberInWordsPosition.x, canvas.width, img.width),
        y: calculatePosition(numberInWordsPosition.y, canvas.height, img.height) + offset
    }
    const scaledServiceDepositPosition = {
        x: calculatePosition(serviceDepositPosition.x, canvas.width, img.width),
        y: calculatePosition(serviceDepositPosition.y, canvas.height, img.height) + offset
    }
    const scaledServiceDatePosition = {
        x: calculatePosition(serviceDatePosition.x, canvas.width, img.width),
        y: calculatePosition(serviceDatePosition.y, canvas.height, img.height) + offset
    }
    const scaledCommentsPosition = {
        x: calculatePosition(commentsPosition.x, canvas.width, img.width),
        y: calculatePosition(commentsPosition.y, canvas.height, img.height) + offset
    }
    const scaledApplicantPosition = {
        x: calculatePosition(applicantPosition.x, canvas.width, img.width),
        y: calculatePosition(applicantPosition.y, canvas.height, img.height) + offset
    }
    const scaledSalesDependantPosition = {
        x: calculatePosition(salesDependantPosition.x, canvas.width, img.width),
        y: calculatePosition(salesDependantPosition.y, canvas.height, img.height) + offset
    }
    const scaledSalesSupervisorPosition = {
        x: calculatePosition(salesSupervisorPosition.x, canvas.width, img.width),
        y: calculatePosition(salesSupervisorPosition.y, canvas.height, img.height) + offset
    }
    const scaledHeadOfSalesPosition = {
        x: calculatePosition(headOfSalesPosition.x, canvas.width, img.width),
        y: calculatePosition(headOfSalesPosition.y, canvas.height, img.height) + offset
    }
    const scaledContractPayPaymentRowPosition = {
        x: calculatePosition(contractPayPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(contractPayPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledMonthlyInstallmentFieldPosition = {
        x: calculatePosition(monthlyInstallmentFieldPosition.x, canvas.width, img.width),
        y: calculatePosition(monthlyInstallmentFieldPosition.y, canvas.height, img.height) + offset
    }
    const scaledMonthlyInstallmentPaymentRowPosition = {
        x: calculatePosition(monthlyInstallmentPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(monthlyInstallmentPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledFinalPaymentPaymentRowPosition = {
        x: calculatePosition(finalPaymentPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(finalPaymentPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledForthPayPaymentRowPosition = {
        x: calculatePosition(forthPayPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(forthPayPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledThirdPayPaymentRowPosition = {
        x: calculatePosition(thirdPayPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(thirdPayPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledSecondPayPaymentRowPosition = {
        x: calculatePosition(secondPayPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(secondPayPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledFirstPayPaymentRowPosition = {
        x: calculatePosition(firstPayPaymentRowPosition.x, canvas.width, img.width),
        y: calculatePosition(firstPayPaymentRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledMonthlyInstallmentDateRowPosition = {
        x: calculatePosition(monthlyInstallmentDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(monthlyInstallmentDateRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledFinalPaymentDateRowPosition = {
        x: calculatePosition(finalPaymentDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(finalPaymentDateRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledForthPayDateRowPosition = {
        x: calculatePosition(forthPayDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(forthPayDateRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledThirdPayDateRowPosition = {
        x: calculatePosition(thirdPayDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(thirdPayDateRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledSecondPayDateRowPosition = {
        x: calculatePosition(secondPayDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(secondPayDateRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledFirstPayDateRowPosition = {
        x: calculatePosition(firstPayDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(firstPayDateRowPosition.y, canvas.height, img.height) + offset
    }
    const scaledContractPayDateRowPosition = {
        x: calculatePosition(contractPayDateRowPosition.x, canvas.width, img.width),
        y: calculatePosition(contractPayDateRowPosition.y, canvas.height, img.height)
    }







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
    ctx.fillText(project, scaledProjectPosition.x, scaledProjectPosition.y);
    ctx.fillText(unitCode, scaledUnitCodePosition.x, scaledUnitCodePosition.y);
    ctx.fillText(unitSpace, scaledUnitSpacePosition.x, scaledUnitSpacePosition.y);
    ctx.fillText(unitFloor, scaledUnitFloorPosition.x, scaledUnitFloorPosition.y);
    ctx.fillText(unitTower, scaledUnitTowerPosition.x, scaledUnitTowerPosition.y);
    ctx.fillText(reservationPrice, scaledReservationPricePosition.x, scaledReservationPricePosition.y);
    // ctx.fillText(totalUnitPrice, scaledTotalUnitPricePosition.x, scaledTotalUnitPricePosition.y);
    ctx.fillText(numberInWords, scaledNumberInWordsPosition.x, scaledNumberInWordsPosition.y);
    ctx.fillText(serviceDeposit, scaledServiceDepositPosition.x, scaledServiceDepositPosition.y);
    ctx.fillText(serviceDate, scaledServiceDatePosition.x, scaledServiceDatePosition.y);
    ctx.fillText(comments, scaledCommentsPosition.x, scaledCommentsPosition.y);
    ctx.fillText(applicant, scaledApplicantPosition.x, scaledApplicantPosition.y);
    ctx.fillText(salesDependant, scaledSalesDependantPosition.x, scaledSalesDependantPosition.y);
    ctx.fillText(salesSupervisor, scaledSalesSupervisorPosition.x, scaledSalesSupervisorPosition.y);
    ctx.fillText(headOfSales, scaledHeadOfSalesPosition.x, scaledHeadOfSalesPosition.y);
    ctx.fillText(contractPayPaymentRow, scaledContractPayPaymentRowPosition.x, scaledContractPayPaymentRowPosition.y);
    ctx.fillText(monthlyInstallmentField, scaledMonthlyInstallmentFieldPosition.x, scaledMonthlyInstallmentFieldPosition.y);
    ctx.fillText(monthlyInstallmentPaymentRow, scaledMonthlyInstallmentPaymentRowPosition.x, scaledMonthlyInstallmentPaymentRowPosition.y);
    ctx.fillText(finalPaymentPaymentRow, scaledFinalPaymentPaymentRowPosition.x, scaledFinalPaymentPaymentRowPosition.y);
    ctx.fillText(forthPayPaymentRow, scaledForthPayPaymentRowPosition.x, scaledForthPayPaymentRowPosition.y);
    ctx.fillText(thirdPayPaymentRow, scaledThirdPayPaymentRowPosition.x, scaledThirdPayPaymentRowPosition.y);    
    ctx.fillText(secondPayPaymentRow, scaledSecondPayPaymentRowPosition.x, scaledSecondPayPaymentRowPosition.y);
    ctx.fillText(firstPayPaymentRow, scaledFirstPayPaymentRowPosition.x, scaledFirstPayPaymentRowPosition.y);
    ctx.fillText(monthlyInstallmentDateRow, scaledMonthlyInstallmentDateRowPosition.x, scaledMonthlyInstallmentDateRowPosition.y);
    ctx.fillText(finalPaymentDateRow, scaledFinalPaymentDateRowPosition.x, scaledFinalPaymentDateRowPosition.y);
    ctx.fillText(forthPayDateRow, scaledForthPayDateRowPosition.x, scaledForthPayDateRowPosition.y);
    ctx.fillText(thirdPayDateRow, scaledThirdPayDateRowPosition.x, scaledThirdPayDateRowPosition.y);
    ctx.fillText(secondPayDateRow, scaledSecondPayDateRowPosition.x, scaledSecondPayDateRowPosition.y);
    ctx.fillText(firstPayDateRow, scaledFirstPayDateRowPosition.x, scaledFirstPayDateRowPosition.y);
    ctx.fillText(contractPayDateRow, scaledContractPayDateRowPosition.x, scaledContractPayDateRowPosition.y);

    

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
    const isTypeCashChecked = document.getElementById('typeCash').checked;
    const isTypeChequeChecked = document.getElementById('typeCheque').checked;



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
        ctx.fillText('', scaledOtherDetails.x, scaledOtherDetails.y);
    }else{
        otherDetailsField.style.display = 'none';
    }
    if (isTypeCashChecked) {
        const scaledTypeCash = {
            x: calculatePosition(typeCashPosition.x, canvas.width, img.width),
            y: calculatePosition(typeCashPosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledTypeCash.x, scaledTypeCash.y);
    }
    if (isTypeChequeChecked) {
        const scaledTypeCheque = {
            x: calculatePosition(typeChequePosition.x, canvas.width, img.width),
            y: calculatePosition(typeChequePosition.y, canvas.height, img.height)
        };
        ctx.fillText('✔', scaledTypeCheque.x, scaledTypeCheque.y);
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
    const project = document.getElementById('project').value;
    const unitCode = document.getElementById('unitCode').value;
    const unitSpace = document.getElementById('unitSpace').value;
    const unitFloor = document.getElementById('unitFloor').value;
    const unitTower = document.getElementById('unitTower').value;
    const reservationPrice = document.getElementById('reservationPrice').value;
    // const totalUnitPrice = document.getElementById('totalUnitPrice').value;
    const numberInWords = document.getElementById('numberInWords').value;
    const serviceDeposit = document.getElementById('serviceDeposit').value;
    const serviceDate = document.getElementById('serviceDate').value;
    const comments = document.getElementById('comments').value;
    const applicant = document.getElementById('applicant').value;
    const salesDependant = document.getElementById('salesDependant').value;
    const salesSupervisor = document.getElementById('salesSupervisor').value;
    const headOfSales = document.getElementById('headOfSales').value;
    const contractPayPaymentRow = document.getElementById('contractPayPaymentRow').value;
    const monthlyInstallmentField = document.getElementById('monthlyInstallmentField').value;
    const monthlyInstallmentPaymentRow = document.getElementById('monthlyInstallmentPaymentRow').value;
    const finalPaymentPaymentRow = document.getElementById('finalPaymentPaymentRow').value;
    const forthPayPaymentRow = document.getElementById('forthPayPaymentRow').value;
    const thirdPayPaymentRow = document.getElementById('thirdPayPaymentRow').value;
    const secondPayPaymentRow = document.getElementById('secondPayPaymentRow').value;
    const firstPayPaymentRow = document.getElementById('firstPayPaymentRow').value;
    const monthlyInstallmentDateRow = document.getElementById('monthlyInstallmentDateRow').value;
    const finalPaymentDateRow = document.getElementById('finalPaymentDateRow').value;
    const forthPayDateRow = document.getElementById('forthPayDateRow').value;
    const thirdPayDateRow = document.getElementById('thirdPayDateRow').value;
    const secondPayDateRow = document.getElementById('secondPayDateRow').value;
    const firstPayDateRow = document.getElementById('firstPayDateRow').value;
    const contractPayDateRow = document.getElementById('contractPayDateRow').value;




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
    const isShopDeatilsChecked = document.getElementById('shopDetails').checked;
    const isOfficeDetailsChecked = document.getElementById('officeDetails').checked;
    const isClinicDetailsChecked = document.getElementById('clinicDetails').checked;
    const isOtherDetailsChecked = document.getElementById('otherDetails').checked;
    const isTypeCashChecked = document.getElementById('typeCash').checked;
    const isTypeChequeChecked = document.getElementById('typeCheque').checked;


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
    const scaledProjectPosition = {
        x: projectPosition.x * canvasToMMFactorX,
        y: projectPosition.y * canvasToMMFactorY
    }
    const scaledUnitCodePosition = {
        x: unitCodePosition.x * canvasToMMFactorX,
        y: unitCodePosition.y * canvasToMMFactorY
    }
    const scaledUnitSpacePosition = {
        x: unitSpacePosition.x * canvasToMMFactorX,
        y: unitSpacePosition.y * canvasToMMFactorY
    }
    const scaledUnitFloorPosition = {
        x: unitFloorPosition.x * canvasToMMFactorX,
        y: unitFloorPosition.y * canvasToMMFactorY
    }
    const scaledUnitTowerPosition = {
        x: unitTowerPosition.x * canvasToMMFactorX,
        y: unitTowerPosition.y * canvasToMMFactorY
    }
    const scaledReservationPricePosition = {
        x: reservationPricePosition.x * canvasToMMFactorX,
        y: reservationPricePosition.y * canvasToMMFactorY
    }
    // const scaledTotalUnitPricePosition = {
    //     x: totalUnitPricePosition.x * canvasToMMFactorX,
    //     y: totalUnitPricePosition.y * canvasToMMFactorY
    // }
    const scaledNumberInWordsPosition = {
        x: numberInWordsPosition.x * canvasToMMFactorX,
        y: numberInWordsPosition.y * canvasToMMFactorY
    }
    const scaledServiceDepositPosition = {
        x: serviceDepositPosition.x * canvasToMMFactorX,
        y: serviceDepositPosition.y * canvasToMMFactorY
    }
    const scaledServiceDatePosition = {
        x: serviceDatePosition.x * canvasToMMFactorX,
        y: serviceDatePosition.y * canvasToMMFactorY
    }
    const scaledCommentsPosition = {
        x: commentsPosition.x * canvasToMMFactorX,
        y: commentsPosition.y * canvasToMMFactorY
    }
    const scaledApplicantPosition = {
        x: applicantPosition.x * canvasToMMFactorX,
        y: applicantPosition.y * canvasToMMFactorY
    }
    const scaledSalesDependantPosition = {
        x: salesDependantPosition.x * canvasToMMFactorX,
        y: salesDependantPosition.y * canvasToMMFactorY
    }
    const scaledSalesSupervisorPosition = {
        x: salesSupervisorPosition.x * canvasToMMFactorX,
        y: salesSupervisorPosition.y * canvasToMMFactorY
    }
    const scaledHeadOfSalesPosition = {
        x: headOfSalesPosition.x * canvasToMMFactorX,
        y: headOfSalesPosition.y * canvasToMMFactorY
    }
    const scaledContractPayPaymentRowPosition = {
        x: contractPayPaymentRowPosition.x * canvasToMMFactorX,
        y: contractPayPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledMonthlyInstallmentFieldPosition = {
        x: monthlyInstallmentFieldPosition.x * canvasToMMFactorX,
        y: monthlyInstallmentFieldPosition.y * canvasToMMFactorY
    }
    const scaledMonthlyInstallmentPaymentRowPosition = {
        x: monthlyInstallmentPaymentRowPosition.x * canvasToMMFactorX,
        y: monthlyInstallmentPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledFinalPaymentPaymentRowPosition = {
        x: finalPaymentPaymentRowPosition.x * canvasToMMFactorX,
        y: finalPaymentPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledForthPayPaymentRowPosition = {
        x: forthPayPaymentRowPosition.x * canvasToMMFactorX,
        y: forthPayPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledThirdPayPaymentRowPosition = {
        x: thirdPayPaymentRowPosition.x * canvasToMMFactorX,
        y: thirdPayPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledSecondPayPaymentRowPosition = {
        x: secondPayPaymentRowPosition.x * canvasToMMFactorX,
        y: secondPayPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledFirstPayPaymentRowPosition = {
        x: firstPayPaymentRowPosition.x * canvasToMMFactorX,
        y: firstPayPaymentRowPosition.y * canvasToMMFactorY
    }
    const scaledMonthlyInstallmentDateRowPosition = {
        x: monthlyInstallmentDateRowPosition.x * canvasToMMFactorX,
        y: monthlyInstallmentDateRowPosition.y * canvasToMMFactorY
    }
    const scaledFinalPaymentDateRowPosition = {
        x: finalPaymentDateRowPosition.x * canvasToMMFactorX,
        y: finalPaymentDateRowPosition.y * canvasToMMFactorY
    }
    const scaledForthPayDateRowPosition = {
        x: forthPayDateRowPosition.x * canvasToMMFactorX,
        y: forthPayDateRowPosition.y * canvasToMMFactorY
    }
    const scaledThirdPayDateRowPosition = {
        x: thirdPayDateRowPosition.x * canvasToMMFactorX,
        y: thirdPayDateRowPosition.y * canvasToMMFactorY
    }
    const scaledSecondPayDateRowPosition = {
        x: secondPayDateRowPosition.x * canvasToMMFactorX,
        y: secondPayDateRowPosition.y * canvasToMMFactorY
    }
    const scaledFirstPayDateRowPosition = {
        x: firstPayDateRowPosition.x * canvasToMMFactorX,
        y: firstPayDateRowPosition.y * canvasToMMFactorY
    }
    const scaledContractPayDateRowPosition = {
        x: contractPayDateRowPosition.x * canvasToMMFactorX,
        y: contractPayDateRowPosition.y * canvasToMMFactorY
    }



    // Calculate the scaled positions for the checkboxes
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
    const scaledTypeCash = {
        x: typeCashPosition.x * canvasToMMFactorX - 5,
        y: typeCashPosition.y * canvasToMMFactorY - 7
    }
    const scaledTypeCheque = {
        x: typeChequePosition.x * canvasToMMFactorX - 5,
        y: typeChequePosition.y * canvasToMMFactorY - 7
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
                #projectText { top: ${scaledProjectPosition.y}mm; right: ${canvasWidthMM - scaledProjectPosition.x}mm; }
                #unitCodeText { top: ${scaledUnitCodePosition.y}mm; right: ${canvasWidthMM - scaledUnitCodePosition.x}mm; }
                #unitSpaceText { top: ${scaledUnitSpacePosition.y}mm; right: ${canvasWidthMM - scaledUnitSpacePosition.x}mm; }
                #unitFloorText { top: ${scaledUnitFloorPosition.y}mm; right: ${canvasWidthMM - scaledUnitFloorPosition.x}mm; }
                #unitTowerText { top: ${scaledUnitTowerPosition.y}mm; right: ${canvasWidthMM - scaledUnitTowerPosition.x}mm; }
                #reservationPriceText { top: ${scaledReservationPricePosition.y}mm; right: ${canvasWidthMM - scaledReservationPricePosition.x}mm; }
                #numberInWordsText { top: ${scaledNumberInWordsPosition.y}mm; right: ${canvasWidthMM - scaledNumberInWordsPosition.x}mm; }
                #serviceDepositText { top: ${scaledServiceDepositPosition.y}mm; right: ${canvasWidthMM - scaledServiceDepositPosition.x}mm; }
                #serviceDateText { top: ${scaledServiceDatePosition.y}mm; right: ${canvasWidthMM - scaledServiceDatePosition.x}mm; }
                #commentsText { top: ${scaledCommentsPosition.y}mm; right: ${canvasWidthMM - scaledCommentsPosition.x}mm; }
                #applicantText { top: ${scaledApplicantPosition.y}mm; right: ${canvasWidthMM - scaledApplicantPosition.x}mm; }
                #salesDependantText { top: ${scaledSalesDependantPosition.y}mm; right: ${canvasWidthMM - scaledSalesDependantPosition.x}mm; }
                #salesSupervisorText { top: ${scaledSalesSupervisorPosition.y}mm; right: ${canvasWidthMM - scaledSalesSupervisorPosition.x}mm; }
                #headOfSalesText { top: ${scaledHeadOfSalesPosition.y}mm; right: ${canvasWidthMM - scaledHeadOfSalesPosition.x}mm; }
                #contractPayPaymentRowText { top: ${scaledContractPayPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledContractPayPaymentRowPosition.x}mm; }
                #monthlyInstallmentFieldText { top: ${scaledMonthlyInstallmentFieldPosition.y}mm; right: ${canvasWidthMM - scaledMonthlyInstallmentFieldPosition.x}mm; }
                #monthlyInstallmentPaymentRowText { top: ${scaledMonthlyInstallmentPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledMonthlyInstallmentPaymentRowPosition.x}mm; }
                #finalPaymentPaymentRowText { top: ${scaledFinalPaymentPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledFinalPaymentPaymentRowPosition.x}mm; }
                #forthPayPaymentRowText { top: ${scaledForthPayPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledForthPayPaymentRowPosition.x}mm; }
                #thirdPayPaymentRowText { top: ${scaledThirdPayPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledThirdPayPaymentRowPosition.x}mm; }
                #secondPayPaymentRowText { top: ${scaledSecondPayPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledSecondPayPaymentRowPosition.x}mm; }
                #firstPayPaymentRowText { top: ${scaledFirstPayPaymentRowPosition.y}mm; right: ${canvasWidthMM - scaledFirstPayPaymentRowPosition.x}mm; }
                #monthlyInstallmentDateRowText { top: ${scaledMonthlyInstallmentDateRowPosition.y}mm; right: ${canvasWidthMM - scaledMonthlyInstallmentDateRowPosition.x}mm; }
                #finalPaymentDateRowText { top: ${scaledFinalPaymentDateRowPosition.y}mm; right: ${canvasWidthMM - scaledFinalPaymentDateRowPosition.x}mm; }
                #forthPayDateRowText { top: ${scaledForthPayDateRowPosition.y}mm; right: ${canvasWidthMM - scaledForthPayDateRowPosition.x}mm; }
                #thirdPayDateRowText { top: ${scaledThirdPayDateRowPosition.y}mm; right: ${canvasWidthMM - scaledThirdPayDateRowPosition.x}mm; }
                #secondPayDateRowText { top: ${scaledSecondPayDateRowPosition.y}mm; right: ${canvasWidthMM - scaledSecondPayDateRowPosition.x}mm; }
                #firstPayDateRowText { top: ${scaledFirstPayDateRowPosition.y}mm; right: ${canvasWidthMM - scaledFirstPayDateRowPosition.x}mm; }
                #contractPayDateRowText { top: ${scaledContractPayDateRowPosition.y}mm; right: ${canvasWidthMM - scaledContractPayDateRowPosition.x}mm; }


                


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
                #typeCashTick { top: ${scaledTypeCash.y}mm; left: ${scaledTypeCash.x}mm; }
                #typeChequeTick { top: ${scaledTypeCheque.y}mm; left: ${scaledTypeCheque.x}mm; }


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
                <div id="projectText" class="text">${project}</div>
                <div id="unitCodeText" class="text">${unitCode}</div>
                <div id="unitSpaceText" class="text">${unitSpace}</div>
                <div id="unitFloorText" class="text">${unitFloor}</div>
                <div id="unitTowerText" class="text">${unitTower}</div>
                <div id="reservationPriceText" class="text">${reservationPrice}</div>
                <div id="numberInWordsText" class="text">${numberInWords}</div>
                <div id="serviceDepositText" class="text">${serviceDeposit}</div>
                <div id="serviceDateText" class="text">${serviceDate}</div>
                <div id="commentsText" class="text">${comments}</div>
                <div id="applicantText" class="text">${applicant}</div>
                <div id="salesDependantText" class="text">${salesDependant}</div>
                <div id="salesSupervisorText" class="text">${salesSupervisor}</div>
                <div id="headOfSalesText" class="text">${headOfSales}</div>
                <div id="contractPayPaymentRowText" class="text">${contractPayPaymentRow}</div>
                <div id="monthlyInstallmentFieldText" class="text">${monthlyInstallmentField}</div>
                <div id="monthlyInstallmentPaymentRowText" class="text">${monthlyInstallmentPaymentRow}</div>
                <div id="finalPaymentPaymentRowText" class="text">${finalPaymentPaymentRow}</div>
                <div id="forthPayPaymentRowText" class="text">${forthPayPaymentRow}</div>
                <div id="thirdPayPaymentRowText" class="text">${thirdPayPaymentRow}</div>
                <div id="secondPayPaymentRowText" class="text">${secondPayPaymentRow}</div>
                <div id="firstPayPaymentRowText" class="text">${firstPayPaymentRow}</div>
                <div id="monthlyInstallmentDateRowText" class="text">${monthlyInstallmentDateRow}</div>
                <div id="finalPaymentDateRowText" class="text">${finalPaymentDateRow}</div>
                <div id="forthPayDateRowText" class="text">${forthPayDateRow}</div>
                <div id="thirdPayDateRowText" class="text">${thirdPayDateRow}</div>
                <div id="secondPayDateRowText" class="text">${secondPayDateRow}</div>
                <div id="firstPayDateRowText" class="text">${firstPayDateRow}</div>
                <div id="contractPayDateRowText" class="text">${contractPayDateRow}</div>
                

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
                ${isOtherDetailsChecked ? `<div id="otherDetailsTick" class="tick"></div>` : ''}
                ${isTypeCashChecked ? `<div id="typeCashTick" class="tick">✔</div>` : ''}
                ${isTypeChequeChecked ? `<div id="typeChequeTick" class="tick">✔</div>` : ''}


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