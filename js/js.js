$('.hamburger-menu').click(function(){
    $('.menu').css("visibility", "visible");
});

$('.close').click(function(){
    $('.menu').css("visibility", "hidden");
});

$('.edit').click(function(){
    $('.show-details').css("display", "none");
    $('form').css("display", "block");
});

$('.cancel').click(function(){
    $('.show-details').css("display", "block");
    $('form').css("display", "none");
});

$( document ).ready(function() {
    $('.show-details').css("display", "block");
    $('#profile-form').css("display", "none");
});


//form errors
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const inputControls = formControl.querySelector('input');
    inputControls.classList.add("input-error");
    formControl.className = 'form-control error';
    small.innerText = message;
}

//progress bar to be edited
var percent = 5;

$('.increment').click(function () {
    percent++;
    percent++;
    percent++;
    percent++;
    percent++;
    document.querySelector(".progress-bar").style.width = percent + "%";
    document.getElementById('progress-bar').innerText = percent + "points";
    return false;
});

//needs increment quantity at cart function