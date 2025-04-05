function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    // Check if both username and password are provided
    if (!username || !password) {
        errorMessage.textContent = "Please fill out both username and password.";
        return;
    }

    // Validate username and password
    if ((username === "admin" && password === "password") || (username === "goggles" && password === "2start")) {
        // Redirect to the landing page (for simplicity, just changing the window location)
        window.location.href = "landing.html";
    } else {
        errorMessage.textContent = "Incorrect username or password.";
    }
}

function outText(){
    document.getElementById("logoutText").innerText = "Logout Successful";    
}

function signOut() {
    window.location.href = "index.html";
    outText(); 
}