// ==========================================
// 1. SELECTING ELEMENTS USING getElementById()
// ==========================================

// Select the main heading using its ID
let heading = document.getElementById("mainHeading");

// Select the introduction paragraph
let introduction = document.getElementById("introText");

// Display the selected elements in the console
console.log(heading);

console.log(introduction);


// ==========================================
// 2. SELECTING ELEMENTS USING getElementsByClassName()
// ==========================================

// Select all elements with the class demoText
let demoParagraphs = document.getElementsByClassName("demoText");

// Display the selected elements
console.log(demoParagraphs);


// ==========================================
// 3. SELECTING ELEMENTS USING getElementsByTagName()
// ==========================================

// Select all paragraph elements
let allParagraphs = document.getElementsByTagName("p");

// Display the paragraphs
console.log(allParagraphs);


// ==========================================
// 4. SELECTING ELEMENTS USING querySelector()
// ==========================================

// Select the first paragraph with the class demoText
let firstDemoParagraph = document.querySelector(".demoText");

// Display the selected paragraph
console.log(firstDemoParagraph);


// ==========================================
// 5. SELECTING MULTIPLE ELEMENTS USING querySelectorAll()
// ==========================================

// Select all paragraphs with the class demoText
let selectedParagraphs = document.querySelectorAll(".demoText");

// Display the selected paragraphs
console.log(selectedParagraphs);


// ==========================================
// 6. CHANGING HTML CONTENT USING textContent
// ==========================================

// Select the button
let changeTextButton = document.getElementById("changeTextBtn");

// Add a click event to the button
changeTextButton.addEventListener("click", function() {

    // Change the paragraph text
    introduction.textContent =
        "The paragraph has been changed using JavaScript DOM.";
});


// ==========================================
// 7. CHANGING HTML CONTENT USING innerHTML
// ==========================================

// Select the button
let changeHeadingButton = document.getElementById("changeHeadingBtn");

// Add a click event
changeHeadingButton.addEventListener("click", function() {

    // Change the heading and add HTML formatting
    heading.innerHTML = "Welcome to <u>JavaScript DOM</u>";
});


// ==========================================
// 8. CHANGING INPUT VALUES USING value
// ==========================================

// Select the student name input
let studentNameInput = document.getElementById("studentName");

// Assign a default value
studentNameInput.value = "";


// ==========================================
// 9. CHANGING CSS STYLES USING style
// ==========================================

// Select the colour button
let changeColorButton = document.getElementById("changeColorBtn");

// Add a click event
changeColorButton.addEventListener("click", function() {

    // Change heading colour
    heading.style.color = "red";
});


// ==========================================
// 10. INCREASING FONT SIZE
// ==========================================

// Select the font size button
let increaseSizeButton = document.getElementById("increaseSizeBtn");

// Add a click event
increaseSizeButton.addEventListener("click", function() {

    // Increase the heading font size
    heading.style.fontSize = "40px";
});


// ==========================================
// 11. ADDING AND REMOVING CSS CLASSES
// ==========================================

// Select the toggle style button
let toggleStyleButton = document.getElementById("toggleStyleBtn");

// Add a click event
toggleStyleButton.addEventListener("click", function() {

    // Add the specialStyle class if absent, or remove it if present
    introduction.classList.toggle("specialStyle");
});


// ==========================================
// 12. CREATING ELEMENTS USING createElement()
// ==========================================

// Select the Add Student button
let addStudentButton = document.getElementById("addStudentBtn");

// Select the student list
let studentList = document.getElementById("studentList");

// Add a click event to the button
addStudentButton.addEventListener("click", function() {

    // Get student name
    let studentName = document.getElementById("studentName").value.trim();

    // Get student course
    let studentCourse = document.getElementById("studentCourse").value.trim();

    // Check whether the fields are empty
    if (studentName === "" || studentCourse === "") {

        alert("Please enter the student's name and course.");

        return;
    }

    // Create a new list item
    let newStudent = document.createElement("li");

    // Display student information safely as text
    newStudent.textContent =
        studentName + " - " + studentCourse;

    // Add the list item to the student list
    studentList.appendChild(newStudent);

    // Clear the input fields
    document.getElementById("studentName").value = "";

    document.getElementById("studentCourse").value = "";
});


// ==========================================
// 13. REMOVING ELEMENTS USING remove()
// ==========================================

// Add a click event to each student list item
studentList.addEventListener("click", function(event) {

    // Check whether the clicked element is a list item
    if (event.target.tagName === "LI") {

        // Remove the clicked student
        event.target.remove();
    }
});


// ==========================================
// 14. CHANGING ATTRIBUTES USING setAttribute()
// ==========================================

// Select the image
let studentImage = document.getElementById("studentImage");

// Select the change attribute button
let changeAttributeButton = document.getElementById("changeAttributeBtn");

// Add a click event
changeAttributeButton.addEventListener("click", function() {

    // Change the image alternative text
    studentImage.setAttribute("alt", "Updated student image");

    // Change the image width
    studentImage.setAttribute("width", "300");

    // Display a message
    document.getElementById("messageOutput").textContent =
        "Image attributes updated successfully.";
});


// ==========================================
// 15. READING ATTRIBUTES USING getAttribute()
// ==========================================

// Read the image alternative text
let imageAlternativeText = studentImage.getAttribute("alt");

// Display the attribute in the console
console.log("Image Alternative Text:", imageAlternativeText);


// ==========================================
// 16. REMOVING ATTRIBUTES USING removeAttribute()
// ==========================================

// Select the remove attribute button
let removeAttributeButton = document.getElementById("removeAttributeBtn");

// Add a click event
removeAttributeButton.addEventListener("click", function() {

    // Remove the width attribute from the image
    studentImage.removeAttribute("width");

    // Display a message
    document.getElementById("messageOutput").textContent =
        "Image width attribute removed.";
});


// ==========================================
// 17. SELECTING ALL PARAGRAPHS
// ==========================================

// Select the button
let selectElementsButton = document.getElementById("selectElementsBtn");

// Add a click event
selectElementsButton.addEventListener("click", function() {

    // Select all paragraphs with the demoText class
    let paragraphs = document.querySelectorAll(".demoText");

    // Loop through all selected paragraphs
    paragraphs.forEach(function(paragraph) {

        // Change their text colour
        paragraph.style.color = "blue";

        // Make their text bold
        paragraph.style.fontWeight = "bold";
    });
});


// ==========================================
// 18. DOM TRAVERSAL
// ==========================================

// Select the child paragraph
let childParagraph = document.getElementById("childParagraph");

// Select the traversal button
let traversalButton = document.getElementById("traversalBtn");

// Add a click event
traversalButton.addEventListener("click", function() {

    // Access the parent element
    let parent = childParagraph.parentElement;

    // Display the parent's ID
    document.getElementById("messageOutput").textContent =
        "Parent element ID: " + parent.id;

    // Display the parent element in the console
    console.log("Parent:", parent);

    // Display the children of the parent
    console.log("Children:", parent.children);
});


// ==========================================
// 19. OTHER DOM TRAVERSAL EXAMPLES
// ==========================================

// Access the parent of the student list
console.log("Student List Parent:", studentList.parentElement);

// Access the first child of the student list
console.log("First Student:", studentList.firstElementChild);

// Access the last child of the student list
console.log("Last Student:", studentList.lastElementChild);