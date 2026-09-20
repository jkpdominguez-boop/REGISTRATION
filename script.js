/* =====================================
   GET ELEMENTS
===================================== */

const form = document.getElementById("registrationForm");

const message = document.getElementById("message");

const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");


/* =====================================
   SHOW / HIDE PASSWORD
===================================== */

password.addEventListener("input", function () {

    if (password.value.length > 0) {

        togglePassword.style.display = "block";

    } else {

        togglePassword.style.display = "none";

        password.type = "password";

        togglePassword.textContent = "Show";
    }

});


togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";

        togglePassword.textContent = "Show";

    }

});


/* =====================================
   FORM SUBMISSION
===================================== */

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    /* =================================
       GET VALUES
    ================================= */

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
        document.getElementById("password").value;


    /* =================================
       CHECK EMPTY FIELDS
    ================================= */

    if (
        studentId === "" ||
        fullName === "" ||
        email === "" ||
        address === "" ||
        username === "" ||
        passwordValue === ""
    ) {

        showMessage(
            "Please complete all fields.",
            "error"
        );

        return;
    }


    /* =================================
       CHECK STUDENT ID
    ================================= */

    if (studentId.length < 3) {

        showMessage(
            "Please enter a valid Student ID.",
            "error"
        );

        return;
    }


    /* =================================
       CHECK FULL NAME
    ================================= */

    if (fullName.length < 3) {

        showMessage(
            "Please enter your full name.",
            "error"
        );

        return;
    }


    /* =================================
       CHECK EMAIL
    ================================= */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        showMessage(
            "Please enter a valid email address.",
            "error"
        );

        return;
    }


    /* =================================
       CHECK USERNAME
    ================================= */

    if (username.length < 4) {

        showMessage(
            "Username must be at least 4 characters.",
            "error"
        );

        return;
    }


    /* =================================
       CHECK PASSWORD
    ================================= */

    if (passwordValue.length < 6) {

        showMessage(
            "Password must be at least 6 characters.",
            "error"
        );

        return;
    }


    /* =================================
       SUCCESS
    ================================= */

    showMessage(
        "Registration successful!",
        "success"
    );


    /* =================================
       RESET FORM
    ================================= */

    form.reset();


    // Reset password controls
    password.type = "password";

    togglePassword.style.display = "none";

    togglePassword.textContent = "Show";


    /* =================================
       REMOVE MESSAGE AFTER 3 SECONDS
    ================================= */

    setTimeout(function () {

        message.textContent = "";

        message.className = "";

    }, 3000);

});


/* =====================================
   MESSAGE FUNCTION
===================================== */

function showMessage(text, type) {

    message.textContent = text;

    message.className = type;

}