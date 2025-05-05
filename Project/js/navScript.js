function navigate(page) {
    if (localStorage.getItem("isLoggedIn") === "true") {
    //if(1){
      window.location.href = page;
    } else {
      alert("You must be logged in to access this page.");
      const basePath = window.location.pathname.includes("/pages/") ? window.location.pathname.split("/pages/")[0] : window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
      window.location.href = window.location.origin + basePath + "/login.html?logout=true";
    }
  }

// js/navbar.js

function renderAuthLink() {
    const authLink = document.getElementById("authLink");
    if (!authLink) return;
  
    if (localStorage.getItem("isLoggedIn") === "true") {
      authLink.innerHTML = `<a class="nav-link" href="#" onclick="logout()">Logout</a>`;
    } else {
      if (window.location.pathname.includes("/pages/"))
      authLink.innerHTML = `<a class="nav-link" href="../login.html">Login</a>`;
      else
      authLink.innerHTML = `<a class="nav-link" href="login.html">Login</a>`;
    }
  }
  
  function logout() {
    console.log(location.pathname);
    localStorage.removeItem("isLoggedIn");
    // window.location.href = location.pathname.startsWith("/pages/") ? "../home.html?logout=true" : "home.html?logout=true";
    // window.location.href = window.location.origin + "/home.html?logout=true";
    const basePath = window.location.pathname.includes("/pages/") ? window.location.pathname.split("/pages/")[0] : window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
    window.location.href = window.location.origin + basePath + "/home.html?logout=true";
  }
  
  document.addEventListener("DOMContentLoaded", renderAuthLink);
  