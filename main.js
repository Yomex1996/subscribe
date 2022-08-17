const email = document.querySelector(".mail"),
    invalid = document.querySelector(".invalid"),
    subscribe = document.querySelector(".subscribe");

subscribe.addEventListener('click', () => {
    let input = email.value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input === "") {
        invalid.textContent = "please fill the empty field"
        email.className = "invalid-email";
        setTimeout(() => invalid.textContent = "", 3000)
        setTimeout(() => email.className = "mail", 3000)
        email.value = "";
    }
    else if (input.match(regex)) {
        invalid.textContent = "";
        email.className = "valid-email";
        email.value = "Submitted";
        setTimeout(() => email.value = "", 5000)
        setTimeout(() => email.className = "mail", 5000)
    }
    else {
        invalid.textContent = "please insert a valid email";
        email.className = "invalid-email";
        setTimeout(() => invalid.textContent = "", 3000)
        setTimeout(() => email.className = "mail", 3000)
        email.value = "";
    }
});