var loginField = document.querySelector('#name');
var passField = document.querySelector('#password');
var signInBtn = document.querySelector('#signin');
var loginValue = loginField.value;
var passValue = passField.value;
function signInFunc() {
    console.log(loginField.value);
    console.log(passValue);
}
signInBtn.addEventListener("click", alert(loginField.value));
loginField.addEventListener("keyup", alert(loginField.value));
signInFunc();