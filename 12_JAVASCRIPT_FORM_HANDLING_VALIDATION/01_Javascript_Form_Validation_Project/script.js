
// ==========================================
// 1. SELECTING THE FORM
// ==========================================

// Getting the registration form from HTML
const registrationForm =
    document.getElementById("registrationForm");

// Getting the success message container
const successMessage =
    document.getElementById("successMessage");

// Getting the student details container
const studentDetails =
    document.getElementById("studentDetails");


// ==========================================
// 2. HANDLING FORM SUBMISSION
// ==========================================

// Listening for form submission
registrationForm.addEventListener("submit", function(event) {

    // Preventing the browser from refreshing the page
    event.preventDefault();

    // Calling the validation function
    validateForm();

});


// ==========================================
// 3. MAIN FORM VALIDATION FUNCTION
// ==========================================

function validateForm() {

    // Collecting values entered by the user
    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const age =
        document.getElementById("age").value;

    const course =
        document.getElementById("course").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // ======================================
    // 4. CLEARING OLD ERROR MESSAGES
    // ======================================

    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("phoneError").textContent = "";

    document.getElementById("ageError").textContent = "";

    document.getElementById("courseError").textContent = "";

    document.getElementById("passwordError").textContent = "";

    document.getElementById("confirmPasswordError").textContent = "";

    successMessage.textContent = "";

    studentDetails.textContent = "";


    // Variable for checking whether the form is valid
    let isValid = true;


    // ======================================
    // 5. FULL NAME VALIDATION
    // ======================================

    // Checking whether the name is empty
    if (fullName === "") {

        document.getElementById("nameError").textContent =
            "Full name is required.";

        isValid = false;

    }

    // Checking minimum name length
    else if (fullName.length < 3) {

        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";

        isValid = false;

    }


    // ======================================
    // 6. EMAIL VALIDATION
    // ======================================

    // Regular expression for a basic email format check
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Checking whether email is empty
    if (email === "") {

        document.getElementById("emailError").textContent =
            "Email address is required.";

        isValid = false;

    }

    // Checking email format
    else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // ======================================
    // 7. PHONE NUMBER VALIDATION
    // ======================================

    // Accepting 10 to 15 digits
    // An optional + sign is allowed at the beginning
    const phonePattern = /^\+?\d{10,15}$/;

    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "Phone number is required.";

        isValid = false;

    }

    else if (!phonePattern.test(phone)) {

        document.getElementById("phoneError").textContent =
            "Enter 10 to 15 digits. Only an optional + is allowed at the beginning.";

        isValid = false;

    }


    // ======================================
    // 8. AGE VALIDATION
    // ======================================

    const studentAge = Number(age);

    if (age === "") {

        document.getElementById("ageError").textContent =
            "Age is required.";

        isValid = false;

    }

    else if (!Number.isInteger(studentAge) ||
        studentAge < 16 ||
        studentAge > 100) {

        document.getElementById("ageError").textContent =
            "Age must be a whole number between 16 and 100.";

        isValid = false;

    }


    // ======================================
    // 9. COURSE VALIDATION
    // ======================================

    if (course === "") {

        document.getElementById("courseError").textContent =
            "Please select a course.";

        isValid = false;

    }


    // ======================================
    // 10. PASSWORD VALIDATION
    // ======================================

    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Password is required.";

        isValid = false;

    }

    else if (password.length < 8) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";

        isValid = false;

    }

    else if (!/[A-Z]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least one uppercase letter.";

        isValid = false;

    }

    else if (!/[0-9]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least one number.";

        isValid = false;

    }


    // ======================================
    // 11. CONFIRM PASSWORD VALIDATION
    // ======================================

    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        isValid = false;

    }

    else if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        isValid = false;

    }


    // ======================================
    // 12. CHECKING THE FINAL VALIDATION RESULT
    // ======================================

    if (isValid === true) {

        // Displaying successful registration message
        successMessage.textContent =
            "Registration successful!";


        // Displaying student information safely
        const heading = document.createElement("h3");

        heading.textContent = "Registered Student Details";

        const details = document.createElement("p");

        details.textContent =
            "Name: " + fullName +
            " | Email: " + email +
            " | Phone: " + phone +
            " | Age: " + studentAge +
            " | Course: " + course;

        studentDetails.appendChild(heading);

        studentDetails.appendChild(details);


        // Clearing the form after successful registration
        registrationForm.reset();

    }

}


// ==========================================
// 13. RESETTING THE FORM
// ==========================================

// Listening for the reset button
registrationForm.addEventListener("reset", function() {

    // Clearing previous error messages
    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("phoneError").textContent = "";

    document.getElementById("ageError").textContent = "";

    document.getElementById("courseError").textContent = "";

    document.getElementById("passwordError").textContent = "";

    document.getElementById("confirmPasswordError").textContent = "";

    // Clearing previous results
    successMessage.textContent = "";

    studentDetails.textContent = "";

});
