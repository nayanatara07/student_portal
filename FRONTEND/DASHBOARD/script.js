let users = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        alert("Invalid username or password.");
    }
}

function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    const userExists = users.some((u) => u.username === newUsername);

    if (userExists) {
        alert("Username already taken. Please choose a different username.");
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    alert("Signup successful! Please login with your new credentials.");
    showLoginForm();
}

function showSignupForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}
