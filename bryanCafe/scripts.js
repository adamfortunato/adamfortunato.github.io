// Display current year in footer
document.addEventListener(" DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
});

// Handle enquiry form submission
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const messageSubject = formData.get("messageSubject");
    const messageBody = formData.get("messageBody");
    // TO DO: Implement form validation and sending of enquiry
    document.getElementById("enquiryResponse").innerHTML = "Thank you for your enquiry!";
});