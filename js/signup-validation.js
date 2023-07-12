document.getElementById("signup-form").onsubmit = function (e) {
    e.preventDefault();
    checkInputs();
}

function checkInputs() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username is required');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email is required');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password is required');
    } else {
        setSuccessFor(password);
    }

    if(confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'Must confirm password');
    } else if(passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, 'Passwords do not match');
    } else{
        setSuccessFor(confirmPassword);
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}