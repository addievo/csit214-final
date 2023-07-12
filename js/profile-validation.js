document.getElementById("profile-form").onsubmit = function (e) {
    e.preventDefault();
    checkInputs();
}

function checkInputs() {
    const firstName = document.getElementById('edit-firstname');
    const lastName = document.getElementById('edit-lastname');
    const email = document.getElementById('edit-email');
    const dob = document.getElementById('edit-dob');
    const phoneNumber = document.getElementById('edit-phone');

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const dobValue = dob.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name is required');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name is required');
    } else {
        setSuccessFor(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email is required');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(dobValue === '') {
        setErrorFor(dob, 'DOB is required');
    } else {
        setSuccessFor(dob);
    }

    if(phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Phone number is required');
    } else {
        setSuccessFor(phoneNumber);
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    window.location.href = "../profile/index.html";

    $('.save').click(function(){
        $('.show-details').css("display", "block");
        $('.container').css("margin-bottom", "100px");
        $('form').css("display", "none");
    });
}