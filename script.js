/*
Name: David Kinard
File: script.js
Date created: June 27, 2026
Date updated: June 27, 2026
Version: 1.0
Purpose: External JavaScript file for Valor Veterans Medical Center
         patient registration form. Handles dynamic slide bar display,
         review form button, and clear review function.
*/


/* ==================== SLIDE BAR ==================== */

/* Updates the health rating value displayed next to the slide bar */
function updateHealthRating(value) {
    document.getElementById("health_rating_value").innerHTML = value;
}


/* ==================== REVIEW FORM ==================== */

/* Grabs all entered data and displays it in the review section */
function reviewForm() {

    /* ---------- Grab all field values ---------- */

    // Personal Information
    var firstname   = document.getElementById("firstname").value;
    var middleinit  = document.getElementById("middleinit").value;
    var lastname    = document.getElementById("lastname").value;
    var dob         = document.getElementById("dob").value;
    var ssn         = document.getElementById("ssn").value;

    // Gender radio button
    var genderRadios = document.getElementsByName("gender");
    var gender = "";
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].value;
            break;
        }
    }

    // Contact Information
    var address1          = document.getElementById("address1").value;
    var address2          = document.getElementById("address2").value;
    var city              = document.getElementById("city").value;
    var state             = document.getElementById("state").value;
    var zip               = document.getElementById("zip").value;
    var phone             = document.getElementById("phone1").value;
    var email             = document.getElementById("email").value;
    var preferred_contact = document.getElementById("preferred_contact").value;

    // Account Information
    var userid   = document.getElementById("userid").value;

    // Veteran / Insurance Information
    var branch_service = document.getElementById("branch_service").value;

    // VA eligibility radio button
    var vaRadios = document.getElementsByName("va_eligible");
    var va_eligible = "";
    for (var i = 0; i < vaRadios.length; i++) {
        if (vaRadios[i].checked) {
            va_eligible = vaRadios[i].value;
            break;
        }
    }

    // Service connected radio button
    var serviceRadios = document.getElementsByName("service_connected");
    var service_connected = "";
    for (var i = 0; i < serviceRadios.length; i++) {
        if (serviceRadios[i].checked) {
            service_connected = serviceRadios[i].value;
            break;
        }
    }

    // Insurance radio button
    var insuranceRadios = document.getElementsByName("insurance");
    var insurance = "";
    for (var i = 0; i < insuranceRadios.length; i++) {
        if (insuranceRadios[i].checked) {
            insurance = insuranceRadios[i].value;
            break;
        }
    }

    var insurance_company = document.getElementById("insurance_company").value;
    var policy_number     = document.getElementById("policy_number").value;

    // Medical Information
    var symptoms     = document.getElementById("symptoms").value;
    var health_rating = document.getElementById("health_rating").value;

    // Vaccination radio button
    var vaccinatedRadios = document.getElementsByName("vaccinated");
    var vaccinated = "";
    for (var i = 0; i < vaccinatedRadios.length; i++) {
        if (vaccinatedRadios[i].checked) {
            vaccinated = vaccinatedRadios[i].value;
            break;
        }
    }

    // Medical history checkboxes
    var medicalHistory = [];
    var checkboxes = document.getElementsByName("medical_history");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            medicalHistory.push(checkboxes[i].value);
        }
    }
    var medicalHistoryStr = medicalHistory.length > 0 ? medicalHistory.join(", ") : "None selected";


    /* ---------- Build the review HTML table ---------- */

    var reviewHTML = `
        <table id="review-table">
            <tr><th colspan="2">PLEASE REVIEW YOUR INFORMATION</th></tr>

            <tr><td colspan="2"><strong>Personal Information</strong></td></tr>
            <tr><td>Full Name:</td><td>${firstname} ${middleinit} ${lastname}</td></tr>
            <tr><td>Date of Birth:</td><td>${dob}</td></tr>
            <tr><td>SSN:</td><td>***-**-****</td></tr>
            <tr><td>Gender:</td><td>${gender || "Not selected"}</td></tr>

            <tr><td colspan="2"><strong>Contact Information</strong></td></tr>
            <tr><td>Address:</td><td>${address1} ${address2}</td></tr>
            <tr><td>City, State, Zip:</td><td>${city}, ${state} ${zip}</td></tr>
            <tr><td>Phone:</td><td>${phone}</td></tr>
            <tr><td>Email:</td><td>${email}</td></tr>
            <tr><td>Preferred Contact:</td><td>${preferred_contact}</td></tr>

            <tr><td colspan="2"><strong>Account Information</strong></td></tr>
            <tr><td>User ID:</td><td>${userid}</td></tr>
            <tr><td>Password:</td><td>********</td></tr>

            <tr><td colspan="2"><strong>Veteran / Insurance Information</strong></td></tr>
            <tr><td>Branch of Service:</td><td>${branch_service || "Not selected"}</td></tr>
            <tr><td>VA Eligible:</td><td>${va_eligible || "Not selected"}</td></tr>
            <tr><td>Service-Connected Disability:</td><td>${service_connected || "Not selected"}</td></tr>
            <tr><td>Has Insurance:</td><td>${insurance || "Not selected"}</td></tr>
            <tr><td>Insurance Company:</td><td>${insurance_company || "N/A"}</td></tr>
            <tr><td>Policy Number:</td><td>${policy_number || "N/A"}</td></tr>

            <tr><td colspan="2"><strong>Medical Information</strong></td></tr>
            <tr><td>Current Symptoms:</td><td>${symptoms}</td></tr>
            <tr><td>Vaccinated:</td><td>${vaccinated || "Not selected"}</td></tr>
            <tr><td>Medical History:</td><td>${medicalHistoryStr}</td></tr>
            <tr><td>Health Rating:</td><td>${health_rating} / 10</td></tr>
        </table>
    `;

    /* ---------- Show the review section ---------- */
    document.getElementById("review-content").innerHTML = reviewHTML;
    document.getElementById("review-section").style.display = "block";

    /* Scroll down to the review section */
    document.getElementById("review-section").scrollIntoView({ behavior: "smooth" });
}


/* ==================== CLEAR REVIEW ==================== */

/* Hides the review section when Clear button is clicked */
function clearReview() {
    document.getElementById("review-section").style.display = "none";
    document.getElementById("review-content").innerHTML = "";
    document.getElementById("health_rating_value").innerHTML = "5";
}


/* ==================== END OF DOCUMENT: script.js ==================== */
