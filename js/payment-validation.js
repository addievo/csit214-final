
document.getElementById("payment-form").onsubmit = function (e) {
    e.preventDefault();
    checkPaymentInputs();
}
function checkPaymentInputs() {
    const holder = document.getElementById('holder');
    const card = document.getElementById('card-number');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');


    const holderValue = holder.value.trim();
    const cardValue = card.value.trim();
    const expiryValue = expiry.value.trim();
    const cvvValue = cvv.value.trim();

    if (holderValue === '') {
        setErrorFor(holder, 'Card name holder is required');
    } else {
        setSuccessFor(holder);
    }

    if (cardValue === '') {
        setErrorFor(card, 'Card number is required');
    } else {
        setSuccessFor(card);
    }

    if (expiryValue === '') {
        setErrorFor(expiry, 'Expiry date is required');
    } else {
        setSuccessFor(expiry);
    }

    if (cvvValue === '') {
        setErrorFor(cvv, 'CVV/CCV is required');
    } else {
        setSuccessFor(cvv);
    }

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    window.location.href = "../profile/index.html";
}