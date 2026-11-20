// ======================================
// 1. CREATING AN OBJECT
// ======================================

// Create a student object
let student = {

    // Object properties
    name: "Kennedy",
    age: 25,
    course: "Software Engineering",
    email: "kennedy@gmail.com",
    school: "NIIT Abuja"
};


// ======================================
// 2. ACCESSING OBJECT PROPERTIES
// ======================================

// Access properties using dot notation
console.log("Student Name:", student.name);

console.log("Student Age:", student.age);

console.log("Student Course:", student.course);


// Access properties using bracket notation
console.log("Student Email:", student["email"]);

console.log("Student School:", student["school"]);


// ======================================
// 3. UPDATING OBJECT PROPERTIES
// ======================================

// Change the student's age
student.age = 26;

// Change the student's course
student.course = "Computer Science";

// Display updated information
console.log("Updated Student:", student);


// ======================================
// 4. ADDING NEW OBJECT PROPERTIES
// ======================================

// Add a new property called phone
student.phone = "08012345678";

// Add another property called gender
student.gender = "Male";

// Display the updated object
console.log("After Adding Properties:", student);


// ======================================
// 5. DELETING OBJECT PROPERTIES
// ======================================

// Remove the student's gender property
delete student.gender;

// Display the object after deletion
console.log("After Deleting Property:", student);


// ======================================
// 6. OBJECT METHODS
// ======================================

// Create an object containing a method
let studentProfile = {

    name: "John",
    course: "Web Development",

    // This is a method inside the object
    introduce: function() {

        // Display a message
        return "My name is " + this.name +
            " and I study " + this.course;
    }
};

// Call the object method
console.log(studentProfile.introduce());


// ======================================
// 7. THE THIS KEYWORD
// ======================================

// Create another object
let employee = {

    name: "Mary",
    salary: 150000,

    // Use this to access properties of the current object
    displaySalary: function() {

        return this.name + " earns ₦" + this.salary;
    }
};

// Call the method
console.log(employee.displaySalary());


// ======================================
// 8. NESTED OBJECTS
// ======================================

// Create an object containing another object
let studentDetails = {

    name: "Peter",
    age: 22,

    // Address is another object inside studentDetails
    address: {

        city: "Abuja",
        state: "FCT",
        country: "Nigeria"
    }
};

// Access properties inside the nested object
console.log("Student City:", studentDetails.address.city);

console.log("Student State:", studentDetails.address.state);


// ======================================
// 9. ARRAY OF OBJECTS
// ======================================

// Create an array containing multiple student objects
let students = [

    {
        name: "John",
        age: 20,
        course: "Java",
        score: 85
    },

    {
        name: "Mary",
        age: 22,
        course: "Python",
        score: 75
    },

    {
        name: "Peter",
        age: 21,
        course: "Web Development",
        score: 45
    },

    {
        name: "Grace",
        age: 23,
        course: "Software Engineering",
        score: 90
    }
];

// Access the first student
console.log("First Student:", students[0].name);

// Access the second student's course
console.log("Second Student Course:", students[1].course);


// ======================================
// 10. FOR...IN LOOP
// ======================================

// Loop through the properties of the student object
for (let property in student) {

    // Display each property and its value
    console.log(property + ": " + student[property]);
}


// ======================================
// 11. OBJECT.KEYS()
// ======================================

// Get all property names from the object
let studentKeys = Object.keys(student);

// Display the property names
console.log("Student Properties:", studentKeys);


// ======================================
// 12. OBJECT.VALUES()
// ======================================

// Get all property values from the object
let studentValues = Object.values(student);

// Display the property values
console.log("Student Values:", studentValues);


// ======================================
// 13. OBJECT.ENTRIES()
// ======================================

// Get properties and values as pairs
let studentEntries = Object.entries(student);

// Display the property-value pairs
console.log("Student Entries:", studentEntries);


// ======================================
// 14. OBJECT.ASSIGN()
// ======================================

// Create another object
let additionalInformation = {

    nationality: "Nigerian",
    level: "Intermediate"
};

// Copy properties into the student object
Object.assign(student, additionalInformation);

// Display the updated object
console.log("After Object.assign():", student);


// ======================================
// 15. OPTIONAL CHAINING
// ======================================

// Safely access a property that may not exist
console.log("Student Department:", student.department?.name);

// This returns undefined instead of causing an error
// because department does not exist on student.


// ======================================
// 16. OBJECT DESTRUCTURING
// ======================================

// Extract properties from the student object
let { name, age, course } = student;

// Display the extracted values
console.log("Destructured Name:", name);

console.log("Destructured Age:", age);

console.log("Destructured Course:", course);


// ======================================
// 17. SPREAD OPERATOR
// ======================================

// Create a copy of the student object
let copiedStudent = { ...student };

// Add a new property to the copied object
copiedStudent.level = "Advanced";

// Display the copied object
console.log("Copied Student:", copiedStudent);


// ======================================
// 18. DISPLAY STUDENT OBJECT ON WEBPAGE
// ======================================

function displayStudent() {

    // Build the student information using text-safe DOM elements
    let output = document.getElementById("studentOutput");

    // Clear previous information
    output.replaceChildren();

    // Create a list of student properties
    let details = [
        ["Name", student.name],
        ["Age", student.age],
        ["Course", student.course],
        ["Email", student.email],
        ["School", student.school]
    ];

    // Loop through the properties
    details.forEach(function(detail) {

        // Create a paragraph
        let paragraph = document.createElement("p");

        // Display the property name and value
        paragraph.textContent = detail[0] + ": " + detail[1];

        // Add paragraph to the webpage
        output.appendChild(paragraph);
    });
}


// ======================================
// 19. CREATE STUDENT OBJECT FROM INPUTS
// ======================================

function createStudent() {

    // Get information from the HTML inputs
    let name = document.getElementById("studentName").value.trim();

    let ageInput = document.getElementById("studentAge").value;

    let course = document.getElementById("studentCourse").value.trim();

    let email = document.getElementById("studentEmail").value.trim();

    // Check whether all fields are filled
    if (name === "" || ageInput === "" ||
        course === "" || email === "") {

        alert("Please fill in all fields.");
        return;
    }

    // Convert age into a number
    let age = Number(ageInput);

    // Validate the age
    if (!Number.isInteger(age) || age <= 0) {

        alert("Please enter a valid age.");
        return;
    }

    // Create a new student object from the input values
    student = {

        name: name,
        age: age,
        course: course,
        email: email,
        school: "NIIT Abuja"
    };

    // Clear the input fields
    document.getElementById("studentName").value = "";

    document.getElementById("studentAge").value = "";

    document.getElementById("studentCourse").value = "";

    document.getElementById("studentEmail").value = "";

    // Display the newly created object
    displayStudent();

    alert("Student object created successfully!");
}


// ======================================
// 20. UPDATING STUDENT INFORMATION
// ======================================

function updateStudent() {

    // Check whether a student object has been created
    if (!student.name) {

        alert("Please create a student first.");
        return;
    }

    // Update the student's course
    student.course = "Full Stack Web Development";

    // Update the student's school
    student.school = "NIIT Abuja";

    // Display updated information
    displayStudent();

    alert("Student information updated successfully!");
}


// ======================================
// 21. DELETING A STUDENT PROPERTY
// ======================================

function deleteStudentEmail() {

    // Delete the email property
    delete student.email;

    // Display the updated student object
    displayStudent();

    alert("Student email property deleted.");
}


// ======================================
// 22. DISPLAYING MULTIPLE STUDENTS
// ======================================

function displayAllStudents() {

    // Get the output section
    let output = document.getElementById("allStudentsOutput");

    // Clear the previous content
    output.replaceChildren();

    // Loop through the array of student objects
    students.forEach(function(currentStudent, index) {

        // Create a heading for each student
        let heading = document.createElement("h3");

        // Display the student's number and name
        heading.textContent =
            "Student " + (index + 1) + ": " + currentStudent.name;

        // Create a paragraph for the student's information
        let paragraph = document.createElement("p");

        paragraph.textContent =
            "Age: " + currentStudent.age +
            " | Course: " + currentStudent.course +
            " | Score: " + currentStudent.score;

        // Add the elements to the webpage
        output.appendChild(heading);

        output.appendChild(paragraph);
    });
}


// Display the registered students when the webpage loads
displayAllStudents();