function homeLogin() {
       window.location.href = "login.html";
}


document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const containerLoggedOut = document.getElementById("container-loggedOut");
    const containerLoggedIn = document.getElementById("container-loggedIn");

    if (isLoggedIn) {
        containerLoggedOut.classList.add("d-none");
        containerLoggedIn.classList.remove("d-none");
        fetchWeather();  // Fetch weather data if logged in
    } else {
        containerLoggedOut.classList.remove("d-none");
        containerLoggedIn.classList.add("d-none");
    }
});

function homeLogin() {
    window.location.href = "login.html";
}

function fetchWeather() {
    const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.03&longitude=-75.63&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America/New_York';

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Extract temperature and wind speed
            const temperature = data.current.temperature_2m;
            const windSpeed = data.current.wind_speed_10m;

            // Display weather data
            const weatherElement = document.getElementById('weatherReport');
            weatherElement.innerHTML = `Temperature: ${temperature}°F<br>Wind Speed: ${windSpeed} mph`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherElement = document.getElementById('weatherReport');
            weatherElement.innerHTML = "Unable to fetch weather data.";
        });
}

function homeLogin() {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const todoList = JSON.parse(localStorage.getItem("todoList")) || []; // Get data or empty array
    const listContainer = document.querySelector(".list-todo"); // Select the list
    
    listContainer.innerHTML = ""; // Clear previous items

    todoList.slice(0, 3).forEach(todo => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = todo.text; // Assuming each todo has a 'text' key
        listContainer.appendChild(li);
    });
});