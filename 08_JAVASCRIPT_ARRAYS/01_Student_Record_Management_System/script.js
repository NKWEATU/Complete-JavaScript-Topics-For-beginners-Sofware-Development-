// ======================================
// 1. CREATING AN ARRAY
// ======================================

// Create an array containing student records.
// Each student is represented as an object.

let students = [
    { name: "John", score: 85 },
    { name: "Mary", score: 72 },
    { name: "Peter", score: 45 },
    { name: "Grace", score: 90 },
    { name: "David", score: 38 }
];

// ======================================
// 2. ACCESSING ARRAY ELEMENTS
// ======================================

// Display the first student
console.log("First Student:", students[0].name);

// Display the second student
console.log("Second Student:", students[1].name);

// Display the third student's score
console.log("Third Student Score:", students[2].score);

// ======================================
// 3. ARRAY LENGTH
// ======================================

// Find the number of students
console.log("Total Students:", students.length);

// ======================================
// 4. UPDATING ARRAY ELEMENTS
// ======================================

// Change the first student's score
students[0].score = 88;

console.log("Updated First Student:", students[0]);

// ======================================
// 5. PUSH() METHOD
// ======================================

// Add a new student to the end of the array
students.push({ name: "James", score: 76 });

console.log("After push():", students);

// ======================================
// 6. POP() METHOD
// ======================================

// Remove the last student from the array
students.pop();

console.log("After pop():", students);

// ======================================
// 7. UNSHIFT() METHOD
// ======================================

// Add a new student to the beginning
students.unshift({ name: "Sarah", score: 81 });

console.log("After unshift():", students);

// ======================================
// 8. SHIFT() METHOD
// ======================================

// Remove the first student
students.shift();

console.log("After shift():", students);

// ======================================
// 9. SPLICE() METHOD
// ======================================

// Remove one student at index 1
students.splice(1, 1);

console.log("After splice():", students);

// ======================================
// 10. SLICE() METHOD
// ======================================

// Copy students from index 0 up to, but not including, index 2
let selectedStudents = students.slice(0, 2);

console.log("Selected Students:", selectedStudents);

// ======================================
// 11. INDEXOF() AND INCLUDES()
// ======================================

// Create an array of student names
let studentNames = ["John", "Mary", "Peter", "Grace"];

// Find the position of Mary
console.log("Mary's Index:", studentNames.indexOf("Mary"));

// Check whether Peter exists
console.log("Is Peter Registered?", studentNames.includes("Peter"));

// ======================================
// 12. JOIN() METHOD
// ======================================

// Combine student names into one string
let allNames = studentNames.join(", ");

console.log("Student Names:", allNames);

// ======================================
// 13. SORT() AND REVERSE()
// ======================================

// Create an array of names
let names = ["Peter", "John", "Grace", "Mary"];

// Arrange names alphabetically
names.sort();

console.log("Sorted Names:", names);

// Reverse the order of names
names.reverse();

console.log("Reversed Names:", names);

// ======================================
// 14. FOREACH() METHOD
// ======================================

// Display every student using forEach()
students.forEach(function(student) {

    console.log(student.name + " scored " + student.score);
});

// ======================================
// 15. MAP() METHOD
// ======================================

// Create a new array containing only student names
let namesOnly = students.map(function(student) {

    return student.name;
});

console.log("Names Only:", namesOnly);

// ======================================
// 16. FILTER() METHOD
// ======================================

// Create a new array containing students who passed
let passedStudents = students.filter(function(student) {

    return student.score >= 50;
});

console.log("Passed Students:", passedStudents);

// ======================================
// 17. FIND() METHOD
// ======================================

// Find the first student named Grace
let foundStudent = students.find(function(student) {

    return student.name === "Grace";
});

console.log("Found Student:", foundStudent);

// ======================================
// 18. REDUCE() METHOD
// ======================================

// Calculate the total score of all students
let totalScore = students.reduce(function(total, student) {

    return total + student.score;

}, 0);

console.log("Total Score:", totalScore);

// ======================================
// 19. FUNCTION TO DISPLAY STUDENTS
// ======================================

function displayStudents() {

    // Create an empty string for displaying records
    let output = "";

    // Loop through all students
    students.forEach(function(student, index) {

        // Add each student to the output
        output += "<p>" +
            (index + 1) + ". " +
            student.name + " - " +
            student.score +
            "</p>";
    });

    // Display the records on the webpage
    document.getElementById("studentOutput").innerHTML =
        output || "No students registered.";
}

// ======================================
// 20. ADDING A STUDENT
// ======================================

function addStudent() {

    // Get the input values
    let name = document.getElementById("studentName").value.trim();

    let scoreInput = document.getElementById("studentScore").value;

    // Check whether fields are empty
    if (name === "" || scoreInput === "") {

        alert("Please enter the student name and score.");
        return;
    }

    // Convert the score to a number
    let score = Number(scoreInput);

    // Validate the score
    if (!Number.isFinite(score) || score < 0 || score > 100) {

        alert("Score must be between 0 and 100.");
        return;
    }

    // Check whether the student already exists
    let existingStudent = students.find(function(student) {

        return student.name.toLowerCase() === name.toLowerCase();
    });

    if (existingStudent) {

        alert("This student is already registered.");
        return;
    }

    // Add the student to the array
    students.push({ name: name, score: score });

    // Clear the input fields
    document.getElementById("studentName").value = "";
    document.getElementById("studentScore").value = "";

    // Display updated student records
    displayStudents();

    alert("Student added successfully!");
}

// ======================================
// 21. SEARCHING FOR A STUDENT
// ======================================

function searchStudent() {

    // Get the search name
    let searchName = document.getElementById("searchName").value.trim();

    // Search for the student
    let student = students.find(function(student) {

        return student.name.toLowerCase() === searchName.toLowerCase();
    });

    // Display the search result
    if (student) {

        document.getElementById("searchOutput").textContent =
            student.name + " scored " + student.score;
    }

    else {

        document.getElementById("searchOutput").textContent =
            "Student not found.";
    }
}

// ======================================
// 22. UPDATING A STUDENT SCORE
// ======================================

function updateStudent() {

    // Get the student name and new score
    let name = document.getElementById("updateName").value.trim();

    let scoreInput = document.getElementById("newScore").value;

    // Check for empty inputs
    if (name === "" || scoreInput === "") {

        alert("Please enter the student name and new score.");
        return;
    }

    // Convert score to a number
    let score = Number(scoreInput);

    // Validate score
    if (!Number.isFinite(score) || score < 0 || score > 100) {

        alert("Score must be between 0 and 100.");
        return;
    }

    // Find the student's position in the array
    let studentIndex = students.findIndex(function(student) {

        return student.name.toLowerCase() === name.toLowerCase();
    });

    // Check whether the student exists
    if (studentIndex !== -1) {

        // Update the student's score
        students[studentIndex].score = score;

        document.getElementById("updateOutput").textContent =
            "Student score updated successfully.";

        // Refresh the student records
        displayStudents();
    }

    else {

        document.getElementById("updateOutput").textContent =
            "Student not found.";
    }
}

// ======================================
// 23. REMOVING A STUDENT
// ======================================

function removeStudent() {

    // Get the student's name
    let name = document.getElementById("removeName").value.trim();

    // Find the student's index
    let studentIndex = students.findIndex(function(student) {

        return student.name.toLowerCase() === name.toLowerCase();
    });

    // Check whether the student exists
    if (studentIndex !== -1) {

        // Remove the student from the array
        students.splice(studentIndex, 1);

        document.getElementById("removeOutput").textContent =
            "Student removed successfully.";

        // Refresh the records
        displayStudents();
    }

    else {

        document.getElementById("removeOutput").textContent =
            "Student not found.";
    }
}

// ======================================
// 24. CALCULATING AVERAGE SCORE
// ======================================

function calculateAverage() {

    // Check whether there are students
    if (students.length === 0) {

        document.getElementById("averageOutput").textContent =
            "No student records available.";

        return;
    }

    // Calculate the total using reduce()
    let total = students.reduce(function(sum, student) {

        return sum + student.score;

    }, 0);

    // Calculate the average
    let average = total / students.length;

    // Display the average
    document.getElementById("averageOutput").textContent =
        "Average Score: " + average.toFixed(2);
}

// ======================================
// 25. DISPLAYING PASSED STUDENTS
// ======================================

function displayPassedStudents() {

    // Filter students with scores of 50 and above
    let passed = students.filter(function(student) {

        return student.score >= 50;
    });

    // Display the passed students
    let output = "";

    passed.forEach(function(student) {

        output += "<p>" + student.name +
            " - " + student.score + " (Passed)</p>";
    });

    document.getElementById("studentOutput").innerHTML =
        output || "No students have passed.";
}

// Display all students when the page first loads
displayStudents();