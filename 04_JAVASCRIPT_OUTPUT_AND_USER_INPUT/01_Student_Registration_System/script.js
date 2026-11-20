// ============================================
// PROJECT: STUDENT REGISTRATION SYSTEM
// ============================================


// ============================================
// 1. CONSOLE.LOG() - DISPLAYING OUTPUT
// ============================================

// Display a message in the browser console
console.log("Welcome to the Student Registration System");


// ============================================
// 2. ALERT() - DISPLAYING POPUP MESSAGES
// ============================================

// Create a function to display a welcome message
function showWelcomeMessage() {

    // Display a popup message
    alert("Welcome! You can now register for your course.");

}


// ============================================
// 3. PROMPT() - COLLECTING USER INPUT
// ============================================

// Ask the user to enter their favourite programming language
let favouriteLanguage = prompt("Enter your favourite programming language:");

// Display the entered information in the console
console.log("Favourite Language: " + favouriteLanguage);


// ============================================
// 4. DOCUMENT.WRITE() - DISPLAYING OUTPUT
// ============================================

// This example is commented out because document.write()
// after a webpage has loaded can replace the entire page.

// document.write("Welcome to JavaScript Programming!");


// ============================================
// 5. INNERHTML AND TEXTCONTENT
// ============================================

// Create a function to register a student
function registerStudent() {

    // Collect student name from the HTML input field
    let studentName = document.getElementById("studentName").value;

    // Collect student age from the HTML input field
    let studentAge = document.getElementById("studentAge").value;

    // Collect student course from the HTML input field
    let studentCourse = document.getElementById("studentCourse").value;

    // Collect registration fee from the HTML input field
    let registrationFee = document.getElementById("registrationFee").value;


    // ========================================
    // 6. CHECKING USER INPUT
    // ========================================

    // Check if any field is empty
    if (
        studentName === "" ||
        studentAge === "" ||
        studentCourse === "" ||
        registrationFee === ""
    ) {

        // Display an alert if a field is empty
        alert("Please fill in all the fields.");

        // Stop the function
        return;

    }


    // ========================================
    // 7. CONVERTING INPUT VALUES TO NUMBERS
    // ========================================

    // Convert student age to a whole number
    let age = parseInt(studentAge);

    // Convert registration fee to a decimal number
    let fee = parseFloat(registrationFee);


    // ========================================
    // 8. DISPLAYING OUTPUT USING INNERHTML
    // ========================================

    // Display student information inside the webpage
    document.getElementById("studentDetails").innerHTML =

        "<p>Student Name: " + studentName + "</p>" +

        "<p>Student Age: " + age + "</p>" +

        "<p>Course: " + studentCourse + "</p>";


    // ========================================
    // 9. DISPLAYING OUTPUT USING TEXTCONTENT
    // ========================================

    // Display the registration fee
    document.getElementById("feeDetails").textContent =

        "Registration Fee: ₦" + fee;


    // ========================================
    // 10. CONSOLE.LOG() - DISPLAYING RESULTS
    // ========================================

    // Display student information in the browser console
    console.log("Student Name: " + studentName);

    console.log("Student Age: " + age);

    console.log("Student Course: " + studentCourse);

    console.log("Registration Fee: ₦" + fee);


    // Display a successful registration message
    alert("Student registered successfully!");

}