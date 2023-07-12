document.getElementById("address-form").onsubmit = function (e) {
    e.preventDefault();
    checkAddressInputs();
}

function checkAddressInputs() {
    const title = document.getElementById('title');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const number = document.getElementById('number');
    const address = document.getElementById('address');
    const country = document.getElementById('country');


    const titleValue = title.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const dobValue = dob.value.trim();
    const numberValue = number.value.trim();
    const addressValue = address.value.trim();
    const countryValue = country.value.trim();

    if (titleValue === '') {
        setErrorFor(title, 'Title is required');
    } else {
        setSuccessFor(title);
    }

    if (firstnameValue === '') {
        setErrorFor(firstname, 'First name is required');
    } else {
        setSuccessFor(firstname);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Last name is required');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email is required');
    } else {
        setSuccessFor(email);
    }

    if (dobValue === '') {
        setErrorFor(dob, 'Date of birth is required');
    } else {
        setSuccessFor(dob);
    }

    if (numberValue === '') {
        setErrorFor(number, 'Mobile number is required');
    } else {
        setSuccessFor(number);
    }

    if (countryValue === '') {
        setErrorFor(country, 'Country is required');
    } else {
        setSuccessFor(country);
    }

    if (addressValue === '') {
        setErrorFor(address, 'Address is required');
    } else {
        setSuccessFor(address);
    }

}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    document.getElementById("payments").style.display = "block";
    document.getElementById("deliveries").style.display = "none";
}