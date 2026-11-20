// Create an array containing student information
let students = [
    { name: "John", score: 85 },
    { name: "Mary", score: 72 },
    { name: "Peter", score: 45 },
    { name: "Grace", score: 90 },
    { name: "David", score: 38 }
];

// ======================================
// 1. FOR LOOP
// ======================================

// Function to display all students
function displayStudents() {

    // Create an empty variable to store the output
    let output = "";

    // Start from index 0 and continue until all students are displayed
    for (let i = 0; i < students.length; i++) {

        // Add each student's name and score to the output
        output += "<p>";
        output += students[i].name + " - " + students[i].score;
        output += "</p>";
    }

    // Display the student information on the webpage
    document.getElementById("studentOutput").innerHTML = output;
}

// ======================================
// 2. WHILE LOOP
// ======================================

// Function to calculate the total and average scores
function calculateScores() {

    // Create variables for the total score and counter
    let total = 0;
    let i = 0;

    // Repeat while the counter is less than the number of students
    while (i < students.length) {

        // Add the current student's score to the total
        total += students[i].score;

        // Increase the counter by 1
        i++;
    }

    // Calculate the average score
    let average = total / students.length;

    // Display the total and average
    document.getElementById("summaryOutput").textContent =
        "Total Score: " + total +
        " | Average Score: " + average.toFixed(2);
}

// ======================================
// 3. FOR...OF LOOP
// ======================================

// Function to display students who passed
function displayPassedStudents() {

    // Create an empty variable for the output
    let output = "";

    // Loop through each student in the array
    for (let student of students) {

        // Check if the student's score is 50 or above
        if (student.score >= 50) {

            // Add the student's name and score to the output
            output += "<p>" + student.name +
                " - " + student.score + " (Passed)</p>";
        }
    }

    // Display the passed students
    document.getElementById("passedOutput").innerHTML = output;
}

// ======================================
// 4. DO...WHILE LOOP
// ======================================

// Display numbers from 1 to 5 in the browser console

let number = 1;

// Execute the code before checking the condition
do {

    console.log("Number: " + number);

    // Increase the number by 1
    number++;

} while (number <= 5);

// ======================================
// 5. FOR...IN LOOP
// ======================================

// Create an object containing a student's details
let studentDetails = {
    name: "Kennedy",
    course: "Software Engineering",
    age: 25,
    score: 88
};

// Loop through the properties of the object
for (let property in studentDetails) {

    // Display each property and its value in the console
    console.log(property + ": " + studentDetails[property]);
}

// ======================================
// 6. BREAK STATEMENT
// ======================================

// Stop the loop when the number reaches 4

for (let i = 1; i <= 10; i++) {

    // Stop the loop when i is equal to 4
    if (i === 4) {
        break;
    }

    // Display the current number
    console.log("Break Example: " + i);
}

// ======================================
// 7. CONTINUE STATEMENT
// ======================================

// Skip number 3 and display the remaining numbers

for (let i = 1; i <= 5; i++) {

    // Skip the current iteration when i is 3
    if (i === 3) {
        continue;
    }

    // Display the number if it was not skipped
    console.log("Continue Example: " + i);
}

// ======================================
// 8. NESTED LOOPS
// ======================================

// Display a simple multiplication table

for (let i = 1; i <= 3; i++) {

    // Inner loop runs for each outer loop iteration
    for (let j = 1; j <= 3; j++) {

        // Display the multiplication result
        console.log(i + " x " + j + " = " + (i * j));
    }
}