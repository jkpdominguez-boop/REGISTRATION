// =========================
// SHOW / HIDE PASSWORD
// =========================

const password = document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");


togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "👁";

    }

});


// =========================
// REGISTRATION FORM
// =========================

const registrationForm =
    document.getElementById("registrationForm");

const message =
    document.getElementById("message");


registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const studentId =
        document.getElementById("studentId").value.trim();

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const username =
        document.getElementById("username").value.trim();

    const passwordValue =
        password.value.trim();


    // CHECK EMPTY FIELDS

    if (
        studentId === "" ||
        fullName === "" ||
        email === "" ||
        address === "" ||
        username === "" ||
        passwordValue === ""
    ) {

        message.textContent =
            "Please fill in all fields.";

        message.style.color = "red";

        return;
    }


    // CHECK PASSWORD

    if (passwordValue.length < 6) {

        message.textContent =
            "Password must be at least 6 characters.";

        message.style.color = "red";

        return;
    }


    // SUCCESS

    message.textContent =
        "Registration successful!";

    message.style.color = "green";


    // CLEAR FORM

    registrationForm.reset();

    password.type = "password";

    togglePassword.textContent = "👁";

});