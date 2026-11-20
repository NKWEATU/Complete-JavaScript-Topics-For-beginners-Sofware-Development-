// ======================================
// 1. GLOBAL VARIABLE
// ======================================

// This variable can be accessed by different functions
let schoolName = "NIIT Training Centre";


// ======================================
// 2. FUNCTION WITHOUT PARAMETERS
// ======================================

// Declare a function that displays a welcome message
function welcomeMessage() {

    // Display the welcome message in the console
    console.log("Welcome to the Student Grade Management System");
}

// Call the function
welcomeMessage();


// ======================================
// 3. FUNCTION WITH PARAMETERS
// ======================================

// Create a function that displays a student's name
function displayStudentName(name) {

    // Display the name in the browser console
    console.log("Student Name: " + name);
}

// Call the function and pass an argument
displayStudentName("Kennedy");


// ======================================
// 4. FUNCTION WITH RETURN VALUE
// ======================================

// Create a function that adds two numbers
function addNumbers(number1, number2) {

    // Calculate the sum
    let sum = number1 + number2;

    // Return the calculated result
    return sum;
}

// Call the function and store its returned value
let result = addNumbers(20, 30);

// Display the returned result
console.log("Sum: " + result);


// ======================================
// 5. FUNCTION EXPRESSION
// ======================================

// Store a function inside a variable
let calculateTotal = function(score1, score2, score3) {

    // Return the total of the three scores
    return score1 + score2 + score3;
};

// Call the function expression
let total = calculateTotal(80, 70, 90);

console.log("Total Score: " + total);


// ======================================
// 6. ARROW FUNCTION
// ======================================

// Create an arrow function to calculate average
let calculateAverage = (totalScore, numberOfSubjects) => {

    // Return the average score
    return totalScore / numberOfSubjects;
};

// Call the arrow function
let average = calculateAverage(240, 3);

console.log("Average Score: " + average);


// ======================================
// 7. DEFAULT PARAMETERS
// ======================================

// Create a function with a default parameter
function greetStudent(name = "Student") {

    // Display a greeting
    console.log("Hello, " + name);
}

// Call without an argument
greetStudent();

// Call with an argument
greetStudent("Kennedy");


// ======================================
// 8. CALLBACK FUNCTION
// ======================================

// Create a function that accepts another function
function processStudent(callback) {

    // Display a message
    console.log("Processing student information...");

    // Execute the callback function
    callback();
}

// Create the callback function
function showCompletionMessage() {

    console.log("Student processing completed!");
}

// Pass the function as an argument
processStudent(showCompletionMessage);


// ======================================
// 9. LOCAL VARIABLE
// ======================================

// Create a function with a local variable
function showSchoolInformation() {

    // This variable exists only inside this function
    let schoolLocation = "Abuja";

    console.log("School Name: " + schoolName);
    console.log("School Location: " + schoolLocation);
}

// Call the function
showSchoolInformation();


// ======================================
// 10. MAIN STUDENT RESULT FUNCTION
// ======================================

// This function handles the complete result calculation
function calculateResult() {

    // Get the student's name from the HTML input
    let name = document.getElementById("studentName").value.trim();

    // Get the scores from the HTML inputs
    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    let score3 = document.getElementById("score3").value;

    // Check that all fields have been filled
    if (name === "" || score1 === "" ||
        score2 === "" || score3 === "") {

        alert("Please fill in all fields.");
        return;
    }

    // Convert the scores from text to numbers
    score1 = Number(score1);
    score2 = Number(score2);
    score3 = Number(score3);

    // Validate that each score is between 0 and 100
    if (
        !Number.isFinite(score1) ||
        !Number.isFinite(score2) ||
        !Number.isFinite(score3) ||
        score1 < 0 || score1 > 100 ||
        score2 < 0 || score2 > 100 ||
        score3 < 0 || score3 > 100
    ) {
        alert("Scores must be between 0 and 100.");
        return;
    }

    // Call the calculateTotal function
    let totalScore = calculateTotal(score1, score2, score3);

    // Call the calculateAverage function
    let averageScore = calculateAverage(totalScore, 3);

    // Call the getGrade function
    let grade = getGrade(averageScore);

    // Call the getStatus function
    let status = getStatus(averageScore);

    // Call the generateMessage function
    let message = generateMessage(name, status);

    // Display the student's name
    document.getElementById("nameOutput").textContent =
        "Student Name: " + name;

    // Display the total score
    document.getElementById("totalOutput").textContent =
        "Total Score: " + totalScore;

    // Display the average score
    document.getElementById("averageOutput").textContent =
        "Average Score: " + averageScore.toFixed(2);

    // Display the grade
    document.getElementById("gradeOutput").textContent =
        "Grade: " + grade;

    // Display the examination status
    document.getElementById("statusOutput").textContent =
        "Status: " + status;

    // Display the personalized message
    document.getElementById("messageOutput").textContent =
        message;
}


// ======================================
// 11. FUNCTION TO DETERMINE GRADE
// ======================================

function getGrade(average) {

    if (average >= 70) {
        return "A";
    }

    else if (average >= 60) {
        return "B";
    }

    else if (average >= 50) {
        return "C";
    }

    else if (average >= 45) {
        return "D";
    }

    else if (average >= 40) {
        return "E";
    }

    else {
        return "F";
    }
}


// ======================================
// 12. FUNCTION TO DETERMINE STATUS
// ======================================

function getStatus(average) {

    // Return PASS if average is 50 or above
    if (average >= 50) {
        return "PASS";
    }

    // Otherwise return FAIL
    else {
        return "FAIL";
    }
}


// ======================================
// 13. FUNCTION WITH MULTIPLE PARAMETERS
// ======================================

function generateMessage(studentName, resultStatus) {

    // Generate a message based on the student's status
    if (resultStatus === "PASS") {

        return "Congratulations " + studentName +
            "! You passed your examination.";
    }

    else {

        return "Sorry " + studentName +
            ". You need to work harder.";
    }
}


// ======================================
// 14. CLEAR FORM FUNCTION
// ======================================

function clearForm() {

    // Clear all input fields
    document.getElementById("studentName").value = "";
    document.getElementById("score1").value = "";
    document.getElementById("score2").value = "";
    document.getElementById("score3").value = "";

    // Clear all result displays
    document.getElementById("nameOutput").textContent = "";
    document.getElementById("totalOutput").textContent = "";
    document.getElementById("averageOutput").textContent = "";
    document.getElementById("gradeOutput").textContent = "";
    document.getElementById("statusOutput").textContent = "";
    document.getElementById("messageOutput").textContent = "";
}