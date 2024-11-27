const emailInput = document.getElementById("emailInput");
const feedback = document.getElementById("feedback");

// Regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", () => {
    const email = emailInput.value;

    // Validate email format
    if (emailRegex.test(email)) {
        feedback.textContent = "Valid email format";
        feedback.className = "valid";
    } else {
        feedback.textContent = "Invalid email format";
        feedback.className = "invalid";
    }
});

