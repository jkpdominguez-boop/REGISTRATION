// =====================================================
// PASSWORD SHOW / HIDE
// =====================================================

const togglePassword =
    document.getElementById("togglePassword");

const password =
    document.getElementById("password");


togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

    } else {

        password.type = "password";

        this.innerHTML =
            '<i class="bi bi-eye"></i>';

    }

});


// =====================================================
// REGISTRATION FORM
// =====================================================

const registrationForm =
    document.getElementById("registrationForm");

const message =
    document.getElementById("message");


registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

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
        document.getElementById("password").value.trim();


    // Check empty fields

    if (
        studentId === "" ||
        fullName === "" ||
        email === "" ||
        address === "" ||
        username === "" ||
        passwordValue === ""
    ) {

        message.textContent =
            "Please complete all fields.";

        message.style.color = "red";

        return;
    }


    // Success

    message.textContent =
        "Registration successful!";

    message.style.color = "green";


    // Clear form

    registrationForm.reset();


    // Reset eye icon

    togglePassword.innerHTML =
        '<i class="bi bi-eye"></i>';

});