document.getElementById("track-order-form").onsubmit = function (e) {
    e.preventDefault();
    checkLoginFormInputs();
}

function checkLoginFormInputs() {
    const order = document.getElementById('order');

    const orderValue = order.value.trim();

    if (orderValue === '') {
        setErrorFor(order, 'Tracking number is required');
    } else {
        setSuccessFor(order);
    }

}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
   // window.location.href = "../profile/index.html";
}