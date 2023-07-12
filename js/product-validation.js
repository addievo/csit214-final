document.getElementById("add-product").onsubmit = function (e) {
    e.preventDefault();
    checkLoginFormInputs();
}

function checkLoginFormInputs() {
    const quantity = document.getElementById('quantity');

    if (quantity.value === '' || quantity.value === 0) {
        setErrorFor(quantity, 'Please choose a quantity');
    } else {
        setSuccessFor(quantity);
    }

}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}