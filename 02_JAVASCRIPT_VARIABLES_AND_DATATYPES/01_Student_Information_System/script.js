// ========================================
// PROJECT: STUDENT INFORMATION SYSTEM
// ========================================


// 1. STRING DATA TYPE
// Strings are used to store text values.

// Declare a variable to store the student's name
let studentName = "Kennedy";

// Declare a variable to store the student's course
let studentCourse = "Software Engineering";


// 2. NUMBER DATA TYPE
// Numbers are used to store numerical values.

// Declare a variable to store the student's age
let studentAge = 22;


// 3. BOOLEAN DATA TYPE
// Boolean stores either true or false.

// Declare a variable to check registration status
let studentStatus = true;


// 4. UNDEFINED DATA TYPE
// Undefined means a variable has been declared
// but has not been assigned a value.

// Declare a variable without assigning a value
let studentPhone;


// 5. NULL DATA TYPE
// Null represents an intentionally empty value.

// Declare a variable with a null value
let studentAddress = null;


// ========================================
// DISPLAY STUDENT INFORMATION ON THE WEBPAGE
// ========================================


// Display the student's name
document.getElementById("studentName").textContent =
    "Student Name: " + studentName;


// Display the student's age
document.getElementById("studentAge").textContent =
    "Student Age: " + studentAge;


// Display the student's course
document.getElementById("studentCourse").textContent =
    "Student Course: " + studentCourse;


// Display the student's registration status
document.getElementById("studentStatus").textContent =
    "Registered: " + studentStatus;


// Display the student's phone number
document.getElementById("studentPhone").textContent =
    "Phone Number: " + studentPhone;


// Display the student's address
document.getElementById("studentAddress").textContent =
    "Student Address: " + studentAddress;


// ========================================
// DISPLAYING JAVASCRIPT DATA TYPES
// ========================================


// Use typeof to check the data type of each variable

let result =

    "Name: " + typeof studentName + "<br>" +

    "Age: " + typeof studentAge + "<br>" +

    "Course: " + typeof studentCourse + "<br>" +

    "Registration Status: " + typeof studentStatus + "<br>" +

    "Phone Number: " + typeof studentPhone + "<br>" +

    "Address: " + typeof studentAddress;


// Display the data types on the webpage
document.getElementById("dataTypes").innerHTML = result;