
// ==========================================
// 1. COURSE DATA
// ==========================================

// Creating an array containing course objects.
// Each object represents one available course.

const courses = [

    {
        id: 1,
        name: "Java Programming",
        category: "Programming",
        duration: "3 Months",
        description: "Learn Java programming from the basics to object-oriented programming."
    },

    {
        id: 2,
        name: "Python Programming",
        category: "Programming",
        duration: "2 Months",
        description: "Learn Python for software development and problem solving."
    },

    {
        id: 3,
        name: "HTML and CSS",
        category: "Web Development",
        duration: "1 Month",
        description: "Learn how to structure and style professional websites."
    },

    {
        id: 4,
        name: "JavaScript Development",
        category: "Web Development",
        duration: "2 Months",
        description: "Learn how to make websites interactive using JavaScript."
    },

    {
        id: 5,
        name: "Data Analysis",
        category: "Data",
        duration: "3 Months",
        description: "Learn how to work with data and generate useful insights."
    },

    {
        id: 6,
        name: "React Development",
        category: "Web Development",
        duration: "2 Months",
        description: "Learn how to build interactive user interfaces with React."
    }

];


// ==========================================
// 2. CREATING THE LEARNING LIST
// ==========================================

// This array stores courses selected by the user.
// It starts empty.

let learningList = [];


// ==========================================
// 3. SELECTING HTML ELEMENTS
// ==========================================

const courseGrid = document.getElementById("courseGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const noCoursesMessage =
    document.getElementById("noCoursesMessage");

const courseDetails =
    document.getElementById("courseDetails");

const learningListItems =
    document.getElementById("learningListItems");

const courseCount =
    document.getElementById("courseCount");


// ==========================================
// 4. DISPLAYING ALL COURSES
// ==========================================

function displayCourses(courseArray) {

    // Removing previously displayed course cards
    courseGrid.replaceChildren();

    // Checking whether any courses were found
    if (courseArray.length === 0) {

        noCoursesMessage.textContent =
            "No courses found.";

        return;

    }

    // Clearing the no-courses message
    noCoursesMessage.textContent = "";

    // Going through every course in the array
    courseArray.forEach(function(course) {

        // Creating a card for the course
        const card = document.createElement("div");

        card.classList.add("course-card");

        // Creating the course heading
        const heading = document.createElement("h3");

        heading.textContent = course.name;

        // Creating the course category
        const category = document.createElement("p");

        category.textContent =
            "Category: " + course.category;

        // Creating the course duration
        const duration = document.createElement("p");

        duration.textContent =
            "Duration: " + course.duration;

        // Creating the course description
        const description = document.createElement("p");

        description.textContent = course.description;

        // Creating the details button
        const detailsButton = document.createElement("button");

        detailsButton.textContent = "View Details";

        detailsButton.type = "button";

        detailsButton.dataset.action = "details";

        detailsButton.dataset.id = course.id;

        // Creating the add-to-list button
        const addButton = document.createElement("button");

        addButton.textContent = "Add to Learning List";

        addButton.type = "button";

        addButton.dataset.action = "add";

        addButton.dataset.id = course.id;

        // Adding all elements to the course card
        card.appendChild(heading);

        card.appendChild(category);

        card.appendChild(duration);

        card.appendChild(description);

        card.appendChild(detailsButton);

        card.appendChild(addButton);

        // Adding the completed card to the webpage
        courseGrid.appendChild(card);

    });

}


// ==========================================
// 5. INITIAL COURSE DISPLAY
// ==========================================

// Displaying all available courses when the page loads
displayCourses(courses);


// ==========================================
// 6. SEARCH FUNCTIONALITY
// ==========================================

function searchCourses() {

    // Getting the text entered into the search box
    const searchText = searchInput.value.toLowerCase().trim();

    // Getting the selected category
    const selectedCategory = categoryFilter.value;

    // Filtering the courses
    const filteredCourses = courses.filter(function(course) {

        // Checking whether the course name contains the search text
        const matchesSearch =
            course.name.toLowerCase().includes(searchText);

        // Checking whether the category matches
        const matchesCategory =
            selectedCategory === "All" ||
            course.category === selectedCategory;

        // Returning courses that satisfy both conditions
        return matchesSearch && matchesCategory;

    });

    // Displaying the filtered courses
    displayCourses(filteredCourses);

}

// Listening for typing in the search box
searchInput.addEventListener("input", searchCourses);

// Listening for changes in the category dropdown
categoryFilter.addEventListener("change", searchCourses);


// ==========================================
// 7. COURSE BUTTONS AND EVENT DELEGATION
// ==========================================

// One event listener handles buttons inside all course cards.
courseGrid.addEventListener("click", function(event) {

    // Checking whether a button was clicked
    const clickedButton = event.target.closest("button");

    // Stopping if the click was not on a button inside the grid
    if (!clickedButton || !courseGrid.contains(clickedButton)) {

        return;

    }

    // Getting the course ID from the clicked button
    const courseId = Number(clickedButton.dataset.id);

    // Getting the action from the clicked button
    const action = clickedButton.dataset.action;

    // Finding the selected course
    const selectedCourse = courses.find(function(course) {

        return course.id === courseId;

    });

    // Making sure the course exists
    if (!selectedCourse) {

        return;

    }

    // Checking which button was clicked
    if (action === "details") {

        showCourseDetails(selectedCourse);

    }

    else if (action === "add") {

        addCourse(selectedCourse);

    }

});


// ==========================================
// 8. VIEW COURSE DETAILS
// ==========================================

function showCourseDetails(course) {

    // Creating a heading
    const heading = document.createElement("h3");

    heading.textContent = course.name;

    // Creating course information
    const category = document.createElement("p");

    category.textContent =
        "Category: " + course.category;

    const duration = document.createElement("p");

    duration.textContent =
        "Duration: " + course.duration;

    const description = document.createElement("p");

    description.textContent =
        course.description;

    // Clearing previous course details
    courseDetails.replaceChildren();

    // Displaying the selected course information
    courseDetails.appendChild(heading);

    courseDetails.appendChild(category);

    courseDetails.appendChild(duration);

    courseDetails.appendChild(description);

}


// ==========================================
// 9. ADDING COURSES TO THE LEARNING LIST
// ==========================================

function addCourse(course) {

    // Checking whether the course already exists in the list
    const alreadyAdded = learningList.some(function(item) {

        return item.id === course.id;

    });

    // Preventing duplicate courses
    if (alreadyAdded) {

        alert("This course is already in your learning list.");

        return;

    }

    // Adding the course to the array
    learningList.push(course);

    // Refreshing the learning list on the webpage
    displayLearningList();

}


// ==========================================
// 10. DISPLAYING THE LEARNING LIST
// ==========================================

function displayLearningList() {

    // Clearing previously displayed items
    learningListItems.replaceChildren();

    // Updating the course counter
    courseCount.textContent = learningList.length;

    // Checking whether the list is empty
    if (learningList.length === 0) {

        const emptyMessage = document.createElement("li");

        emptyMessage.textContent =
            "You have not selected any courses.";

        learningListItems.appendChild(emptyMessage);

        return;

    }

    // Going through all selected courses
    learningList.forEach(function(course) {

        // Creating a list item
        const listItem = document.createElement("li");

        listItem.appendChild(
            document.createTextNode(course.name + " ")
        );

        // Creating the remove button
        const removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.type = "button";

        removeButton.dataset.id = course.id;

        // Adding the button to the list item
        listItem.appendChild(removeButton);

        // Adding the list item to the webpage
        learningListItems.appendChild(listItem);

    });

}

// Displaying the initial empty learning list
displayLearningList();


// ==========================================
// 11. REMOVING COURSES FROM THE LEARNING LIST
// ==========================================

// Using event delegation to handle remove buttons
learningListItems.addEventListener("click", function(event) {

    // Checking whether a button was clicked
    if (event.target.tagName === "BUTTON") {

        // Getting the ID of the selected course
        const courseId = Number(event.target.dataset.id);

        // Removing the selected course from the array
        learningList = learningList.filter(function(course) {

            return course.id !== courseId;

        });

        // Updating the displayed learning list
        displayLearningList();

    }

});


// ==========================================
// 12. DARK MODE AND LIGHT MODE
// ==========================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    // Adding or removing the dark-mode class
    document.body.classList.toggle("dark-mode");

    // Checking whether dark mode is active
    const darkModeActive =
        document.body.classList.contains("dark-mode");

    // Changing the button text
    if (darkModeActive) {

        themeButton.textContent = "Light Mode";

    }

    else {

        themeButton.textContent = "Dark Mode";

    }

});


// ==========================================
// 13. MOBILE NAVIGATION MENU
// ==========================================

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

// Opening and closing the navigation menu
menuButton.addEventListener("click", function() {

    // Adding or removing the show-menu class
    navLinks.classList.toggle("show-menu");

    // Checking whether the menu is open
    const menuIsOpen =
        navLinks.classList.contains("show-menu");

    // Updating the button label and accessibility state
    menuButton.textContent = menuIsOpen ? "Close Menu" : "Menu";

    menuButton.setAttribute("aria-expanded", menuIsOpen);

});

// Closing the menu after a navigation link is selected
navLinks.addEventListener("click", function(event) {

    if (event.target.tagName === "A") {

        navLinks.classList.remove("show-menu");

        menuButton.textContent = "Menu";

        menuButton.setAttribute("aria-expanded", "false");

    }

});


// ==========================================
// 14. STUDENT REGISTRATION FORM
// ==========================================

const registrationForm =
    document.getElementById("registrationForm");

const registrationMessage =
    document.getElementById("registrationMessage");


// Listening for form submission
registrationForm.addEventListener("submit", function(event) {

    // Preventing the page from refreshing
    event.preventDefault();

    // Collecting student information
    const studentName =
        document.getElementById("studentName").value.trim();

    const studentEmail =
        document.getElementById("studentEmail").value.trim();

    const selectedCourse =
        document.getElementById("selectedCourse").value;


    // Clearing old error messages
    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("courseError").textContent = "";

    registrationMessage.textContent = "";


    // Creating a variable to track validation
    let isValid = true;


    // ======================================
    // VALIDATING STUDENT NAME
    // ======================================

    if (studentName === "") {

        document.getElementById("nameError").textContent =
            "Please enter your full name.";

        isValid = false;

    }

    else if (studentName.length < 3) {

        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";

        isValid = false;

    }


    // ======================================
    // VALIDATING STUDENT EMAIL
    // ======================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (studentEmail === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email address.";

        isValid = false;

    }

    else if (!emailPattern.test(studentEmail)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // ======================================
    // VALIDATING COURSE SELECTION
    // ======================================

    if (selectedCourse === "") {

        document.getElementById("courseError").textContent =
            "Please select a course.";

        isValid = false;

    }


    // ======================================
    // DISPLAYING REGISTRATION RESULT
    // ======================================

    if (isValid) {

        registrationMessage.textContent =
            "Congratulations, " + studentName +
            "! Your registration for " +
            selectedCourse + " was successful.";

        // Applying a success text colour
        registrationMessage.style.color = "green";

        // Clearing the form
        registrationForm.reset();

    }

});
