// js/loginScript.js

if (localStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "/home.html";
}

class SignIn {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    validate() {
      const correctEmail = "admin@gmail.com";
      const correctPassword = "123456";
      return this.email === correctEmail && this.password === correctPassword;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    // Handle login form submission
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");
  
        errorMessage.textContent = "";
  
        if (!email || !password) {
          errorMessage.textContent = "Please fill out both username and password.";
          return;
        }
  
        const user = new SignIn(email, password);
        if (user.validate()) {
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "home.html";
        } else {
          alert("Incorrect email or password.");
          errorMessage.textContent = "Try Again.";
        }
      });
    }
  
    // Update login/logout button in navbar
    renderAuthLink();
  
  });
  
  // Update navbar auth link (login/logout)
  function renderAuthLink() {
    const authLink = document.getElementById("authLink");
    if (!authLink) return;
  
    if (localStorage.getItem("isLoggedIn") === "true") {
      authLink.innerHTML = `<a class="nav-link" href="#" onclick="logout()">Logout</a>`;
    } else {
      authLink.innerHTML = `<a class="nav-link" href="login.html">Login</a>`;
    }
  }
  
  // Logout and redirect with logout flag
  function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "home.html?logout=true";
  }
  