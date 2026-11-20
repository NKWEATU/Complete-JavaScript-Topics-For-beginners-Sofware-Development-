
// ==========================================
// 1. CLICK EVENT
// ==========================================

// Selecting the button
const clickButton = document.getElementById("clickButton");

// Selecting the result paragraph
const clickResult = document.getElementById("clickResult");

// addEventListener listens for a particular event
clickButton.addEventListener("click", function() {

    // This code runs whenever the button is clicked
    clickResult.textContent = "You clicked the button!";

});


// ==========================================
// 2. DOUBLE CLICK EVENT
// ==========================================

const doubleClickButton =
    document.getElementById("doubleClickButton");

const doubleClickResult =
    document.getElementById("doubleClickResult");

// dblclick runs when the user double-clicks
doubleClickButton.addEventListener("dblclick", function() {

    doubleClickResult.textContent =
        "You double-clicked the button!";

});


// ==========================================
// 3. MOUSE EVENTS
// ==========================================

const mouseBox = document.getElementById("mouseBox");

// mouseover runs when the mouse enters the box
mouseBox.addEventListener("mouseover", function() {

    mouseBox.textContent = "Mouse is inside the box!";

    mouseBox.style.backgroundColor = "lightgreen";

});

// mouseout runs when the mouse leaves the box
mouseBox.addEventListener("mouseout", function() {

    mouseBox.textContent = "Move your mouse over this box";

    mouseBox.style.backgroundColor = "lightblue";

});


// ==========================================
// 4. KEYBOARD EVENTS
// ==========================================

const keyboardInput =
    document.getElementById("keyboardInput");

const keyboardResult =
    document.getElementById("keyboardResult");

// keydown runs when a key is pressed
keyboardInput.addEventListener("keydown", function(event) {

    keyboardResult.textContent =
        "You pressed: " + event.key;

});

// keyup runs when a pressed key is released
keyboardInput.addEventListener("keyup", function(event) {

    console.log("You released: " + event.key);

});


// ==========================================
// 5. INPUT EVENT
// ==========================================

const nameInput = document.getElementById("nameInput");

const nameResult = document.getElementById("nameResult");

// input runs whenever the input value changes
nameInput.addEventListener("input", function() {

    // Reading the value entered by the user
    const enteredName = nameInput.value;

    // Displaying the value immediately
    nameResult.textContent =
        "You are typing: " + enteredName;

});


// ==========================================
// 6. CHANGE EVENT
// ==========================================

const courseSelect =
    document.getElementById("courseSelect");

const courseResult =
    document.getElementById("courseResult");

// change runs when the selected value changes
courseSelect.addEventListener("change", function() {

    // Getting the selected course
    const selectedCourse = courseSelect.value;

    courseResult.textContent =
        "Your selected course is: " + selectedCourse;

});


// ==========================================
// 7. FOCUS AND BLUR EVENTS
// ==========================================

const focusInput = document.getElementById("focusInput");

const focusResult = document.getElementById("focusResult");

// focus runs when an input receives focus
focusInput.addEventListener("focus", function() {

    focusResult.textContent =
        "You are currently using this input field.";

    focusInput.style.backgroundColor = "lightyellow";

});

// blur runs when an input loses focus
focusInput.addEventListener("blur", function() {

    focusResult.textContent =
        "You have left the input field.";

    focusInput.style.backgroundColor = "white";

});


// ==========================================
// 8. FORM SUBMIT EVENT
// ==========================================

const studentForm = document.getElementById("studentForm");

const formResult = document.getElementById("formResult");

studentForm.addEventListener("submit", function(event) {

    // Preventing the browser from reloading the page
    event.preventDefault();

    // Collecting form information
    const studentName =
        document.getElementById("studentName").value;

    const studentEmail =
        document.getElementById("studentEmail").value;

    // Displaying the information safely
    formResult.textContent =
        "Registration successful! Name: " +
        studentName +
        " | Email: " +
        studentEmail;

    // Clearing the form after registration
    studentForm.reset();

});


// ==========================================
// 9. EVENT OBJECT
// ==========================================

const eventObjectButton =
    document.getElementById("eventObjectButton");

const eventObjectResult =
    document.getElementById("eventObjectResult");

eventObjectButton.addEventListener("click", function(event) {

    // event contains information about the event
    console.log(event);

    // event.type tells us the event name
    console.log("Event type:", event.type);

    // event.target identifies the element that triggered it
    console.log("Event target:", event.target);

    eventObjectResult.textContent =
        "Event Type: " + event.type;

});


// ==========================================
// 10. EVENT BUBBLING AND EVENT DELEGATION
// ==========================================

const studentList = document.getElementById("studentList");

const delegationResult =
    document.getElementById("delegationResult");

// One listener on the parent handles clicks
// on all the student buttons inside it.
studentList.addEventListener("click", function(event) {

    // Checking whether the clicked element is a student button
    if (event.target.classList.contains("studentButton")) {

        delegationResult.textContent =
            "You selected: " + event.target.textContent;

    }

});


// ==========================================
// 11. REMOVE EVENT LISTENER
// ==========================================

const removeEventButton =
    document.getElementById("removeEventButton");

const stopEventButton =
    document.getElementById("stopEventButton");

const removeEventResult =
    document.getElementById("removeEventResult");

// Creating a named function so it can be removed later
function displayMessage() {

    removeEventResult.textContent =
        "The click event is still working!";

}

// Registering the event listener
removeEventButton.addEventListener("click", displayMessage);

// Removing the event listener when the second button is clicked
stopEventButton.addEventListener("click", function() {

    removeEventButton.removeEventListener(
        "click",
        displayMessage
    );

    removeEventResult.textContent =
        "The click event has been removed.";

});
