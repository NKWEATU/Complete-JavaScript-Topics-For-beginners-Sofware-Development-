// ============================================
// PROJECT: STUDENT ACADEMIC PERFORMANCE CALCULATOR
// ============================================


// ============================================
// 1. CREATING STUDENT VARIABLES
// ============================================

// Store the student's name
let studentName = "Kennedy";

// Store the student's examination scores
let score1 = 75;
let score2 = 80;
let score3 = 65;


// Display student information
document.getElementById("studentName").textContent =
    "Student Name: " + studentName;


// Display examination scores
document.getElementById("score1").textContent =
    "JavaScript: " + score1;

document.getElementById("score2").textContent =
    "HTML: " + score2;

document.getElementById("score3").textContent =
    "CSS: " + score3;


// ============================================
// 2. ARITHMETIC OPERATORS
// ============================================

// Addition (+)
// Add the three examination scores
let totalScore = score1 + score2 + score3;


// Subtraction (-)
// Find the difference between two scores
let difference = score1 - score2;


// Multiplication (*)
// Multiply the first score by 2
let multiplication = score1 * 2;


// Division (/)
// Calculate the average examination score
let averageScore = totalScore / 3;


// Modulus (%)
// Find the remainder when the total score is divided by 2
let remainder = totalScore % 2;


// Exponentiation (**)
// Calculate the square of the first score
let power = score1 ** 2;


// Display arithmetic results
document.getElementById("totalScore").textContent =
    "Total Score: " + totalScore;

document.getElementById("averageScore").textContent =
    "Average Score: " + averageScore;

document.getElementById("remainder").textContent =
    "Remainder: " + remainder;

document.getElementById("power").textContent =
    "Square of First Score: " + power;


// ============================================
// 3. ASSIGNMENT OPERATORS
// ============================================

// Create a variable to store a bonus score
let bonusScore = 5;


// Add 5 to the bonus score using +=
bonusScore += 5;


// Display the updated bonus score
document.getElementById("bonusScore").textContent =
    "Updated Bonus Score: " + bonusScore;


// ============================================
// 4. COMPARISON OPERATORS
// ============================================

// Greater than (>)
// Check if score1 is greater than score2
let comparison1 = score1 > score2;


// Equality (===)
// Check if score1 is exactly equal to score2
let comparison2 = score1 === score2;


// Display comparison results
document.getElementById("comparison1").textContent =
    "Is Score 1 greater than Score 2? " + comparison1;

document.getElementById("comparison2").textContent =
    "Is Score 1 equal to Score 2? " + comparison2;


// ============================================
// 5. LOGICAL OPERATORS
// ============================================

// AND (&&)
// Both conditions must be true
let logical1 = score1 >= 50 && score2 >= 50;


// OR (||)
// At least one condition must be true
let logical2 = score1 >= 70 || score2 >= 70;


// NOT (!)
// Reverses a Boolean value
let isAbsent = false;

let logical3 = !isAbsent;


// Display logical results
document.getElementById("logical1").textContent =
    "Did the student pass both subjects? " + logical1;

document.getElementById("logical2").textContent =
    "Did the student score at least 70 in one subject? " + logical2;

document.getElementById("logical3").textContent =
    "Is the student present? " + logical3;


// ============================================
// 6. INCREMENT OPERATOR
// ============================================

// Create a variable
let attendance = 10;

// Increase attendance by 1
attendance++;

// Display the updated attendance
document.getElementById("increment").textContent =
    "Updated Attendance: " + attendance;


// ============================================
// 7. DECREMENT OPERATOR
// ============================================

// Create a variable
let remainingAssignments = 5;

// Reduce assignments by 1
remainingAssignments--;

// Display the updated value
document.getElementById("decrement").textContent =
    "Remaining Assignments: " + remainingAssignments;


// ============================================
// 8. STRING CONCATENATION
// ============================================

// Join strings and variables using the + operator
let studentMessage = "Congratulations " + studentName +
    ", your average score is " + averageScore;


// ============================================
// 9. TERNARY OPERATOR
// ============================================

// Check whether the student's average is at least 50
// If true, display PASS
// If false, display FAIL

let result = averageScore >= 50 ? "PASS" : "FAIL";


// Display the student's result
document.getElementById("result").textContent =
    studentMessage + ". Your result: " + result;