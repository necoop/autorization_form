document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.getElementById("password");
    const customPasswordField = document.getElementById("custom-password");

    passwordField.addEventListener("input", function() {
        customPasswordField.textContent = passwordField.value.split('').map(char => '*').join('');
    });

    passwordField.addEventListener("focus", function() {
        passwordField.style.zIndex = 2;
        customPasswordField.style.zIndex = 1;
    });

    passwordField.addEventListener("blur", function() {
        if (passwordField.value.length > 0) {
            passwordField.style.zIndex = 1;
            customPasswordField.style.zIndex = 2;
        }
    });

    customPasswordField.addEventListener("click", function() {
        passwordField.focus();
    });
});
