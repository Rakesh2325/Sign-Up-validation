let firstName = document.getElementById("FirstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
let password = document.getElementById("Password");
let confPassword = document.getElementById("Confirm");
let box = document.getElementById("box");

let message = document.getElementById("message");
let userdata = [];

addData = () => {
    if (firstName.value === "") {
        message.innerHTML = "Please enter your first name!";
        message.style.color = "red";
        message.style.display = "block";
        firstName.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (lastName.value === "") {
        message.innerHTML = "Please enter your last name!";
        message.style.color = "red";
        message.style.display = "block";
        lastName.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (email.value === "") {
        message.innerHTML = "Please enter your email!";
        message.style.color = "red";
        message.style.display = "block";
        email.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (!email.value.match(regex)) {
        message.innerHTML = "Please enter valid email!";
        message.style.color = "red";
        message.style.display = "block";
        email.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (password.value === "") {
        message.innerHTML = "Please enter your password!"
        message.style.color = "red";
        message.style.display = "block";
        password.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (password.value.length !== 6) {
        message.innerHTML = "Please enter 6 digits password!";
        message.style.color = "red";
        message.style.display = "block";
        password.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (confPassword.value === "") {
        message.innerHTML = "Please enter confirm password!";
        message.style.color = "red";
        message.style.display = "block";
        confPassword.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (confPassword.value.length !== 6) {
        message.innerHTML = "Password doesn't match please enter same password!";
        message.style.color = "red";
        message.style.display = "block";
        confPassword.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else if (box.checked == false) {
        message.innerHTML = "Please enter Terms of Use & Privacy Policy!";
        message.style.color = "red";
        message.style.display = "block";
        box.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500)
    } else {
        message.innerHTML = "Data Submit successfully";
        message.style.color = "green";
        message.style.display = "block";
        message.focus();
        obj = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            confirm: confPassword.value,
            box: box.value,
        }
        setTimeout(() => {
            message.style.display = "none";
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            password.value = "";
            Confirm.value = "";
            box.checked = ""
        }, 1500)
        userdata.push(obj)
        console.log(userdata)
    }
}
