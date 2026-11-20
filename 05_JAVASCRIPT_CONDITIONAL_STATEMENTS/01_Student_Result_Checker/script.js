// ============================================
// PROJECT: STUDENT EXAMINATION RESULT CHECKER
// ============================================


// Create a function to check the student's result
function checkResult() {


    // ========================================
    // 1. COLLECTING STUDENT INFORMATION
    // ========================================

    // Get the student's name from the HTML input field
    let studentName = document.getElementById("studentName").value;

    // Get the student's examination score
    // Convert the input value to a number
    let score = Number(document.getElementById("studentScore").value);


    // ========================================
    // 2. CHECKING EMPTY INPUT FIELDS
    // ========================================

    // Check if the student name or score is empty
    if (studentName.trim() === "" ||
        document.getElementById("studentScore").value === "") {

        // Display an error message
        alert("Please enter the student name and score.");

        // Stop the function
        return;
    }


    // ========================================
    // 3. VALIDATING THE EXAMINATION SCORE
    // ========================================

    // Check if the score is between 0 and 100
    if (score < 0 || score > 100 || !Number.isFinite(score)) {

        alert("Please enter a valid score between 0 and 100.");

        return;
    }


    // ========================================
    // 4. IF STATEMENT
    // ========================================

    // Create a variable to store the student's status
    let status;

    // Check if the student scored at least 50
    if (score >= 50) {

        // Assign PASS to the status variable
        status = "PASS";

    }


    // ========================================
    // 5. IF...ELSE STATEMENT
    // ========================================

    // Check whether the student passed or failed
    if (score >= 50) {

        status = "PASS";

    } else {

        status = "FAIL";

    }


    // ========================================
    // 6. IF...ELSE IF...ELSE STATEMENT
    // ========================================

    // Create a variable to store the student's grade
    let grade;

    // Determine the student's grade
    if (score >= 70) {

        grade = "A";

    } else if (score >= 60) {

        grade = "B";

    } else if (score >= 50) {

        grade = "C";

    } else if (score >= 45) {

        grade = "D";

    } else if (score >= 40) {

        grade = "E";

    } else {

        grade = "F";

    }


    // ========================================
    // 7. NESTED IF STATEMENT
    // ========================================

    // Create a variable for the teacher's remark
    let remark;

    // Check whether the student passed
    if (score >= 50) {

        // Check whether the student performed excellently
        if (score >= 70) {

            remark = "Excellent Performance";

        } else {

            remark = "Good Performance";

        }

    } else {

        remark = "You Need to Improve";

    }


    // ========================================
    // 8. SWITCH STATEMENT
    // ========================================

    // Create a variable to store the grade remark
    let gradeRemark;

    // Check the grade and assign a corresponding remark
    switch (grade) {

        case "A":
            gradeRemark = "Outstanding";
            break;

        case "B":
            gradeRemark = "Very Good";
            break;

        case "C":
            gradeRemark = "Good";
            break;

        case "D":
            gradeRemark = "Fair";
            break;

        case "E":
            gradeRemark = "Pass";
            break;

        case "F":
            gradeRemark = "Fail";
            break;

        default:
            gradeRemark = "Invalid Grade";

    }


    // ========================================
    // 9. TERNARY OPERATOR
    // ========================================

    // Use a ternary operator to determine eligibility
    let eligibility = score >= 50 ? "Eligible" : "Not Eligible";


    // ========================================
    // 10. LOGICAL OPERATORS
    // ========================================

    // Check if the student has an excellent result
    let excellentResult = score >= 70 && score <= 100;

    // Check if the student has either an A or B grade
    let goodGrade = grade === "A" || grade === "B";

    // Check whether the student did not fail
    let didNotFail = !(score < 40);


    // ========================================
    // 11. DISPLAYING RESULTS ON THE WEBPAGE
    // ========================================

    // Display student name
    document.getElementById("nameResult").textContent =
        "Student Name: " + studentName;

    // Display examination score
    document.getElementById("scoreResult").textContent =
        "Examination Score: " + score;

    // Display student grade
    document.getElementById("gradeResult").textContent =
        "Grade: " + grade;

    // Display pass or fail status
    document.getElementById("statusResult").textContent =
        "Status: " + status;

    // Display teacher's remark
    document.getElementById("remarkResult").textContent =
        "Teacher's Remark: " + remark;

    // Display additional conditional results
    document.getElementById("messageResult").innerHTML =

        "Grade Remark: " + gradeRemark + "<br>" +

        "Eligibility: " + eligibility + "<br>" +

        "Excellent Result: " + excellentResult + "<br>" +

        "Good Grade: " + goodGrade + "<br>" +

        "Did Not Fail: " + didNotFail;

}