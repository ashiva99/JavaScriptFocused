const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weatherTypes = ["Sunny", "Rainy", "Cloudy"];
const container = document.querySelector('.container');
const body = document.body;

const today = new Date();
const todayIndex = today.getDay(); 
const todayDay = daysOfWeek[todayIndex];


const randomWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
const todayWeather = weatherTypes[randomWeatherIndex];


const todayMessage = document.createElement('h2');
todayMessage.textContent = `Today is ${todayDay}, and it will be ${todayWeather}.`;
container.after(todayMessage); // Append the message after the container


if (todayWeather === "Sunny") {
    body.style.backgroundImage = "url('gifs/sunny.gif')";
} else if (todayWeather === "Rainy") {
    body.style.backgroundImage = "url('gifs/rainy.gif')";
} else if (todayWeather === "Cloudy") {
    body.style.backgroundImage = "url('gifs/cloudy.gif')";
}


daysOfWeek.forEach((day, index) => {

    const randomIndex = Math.floor(Math.random() * weatherTypes.length);
    const weather = weatherTypes[randomIndex];


    const daySpan = document.createElement('span');


    daySpan.textContent = `For ${day} the weather will be ${weather}`;


    if (weather === "Sunny") {
        daySpan.style.backgroundImage = "url('images/sunnyimg.jpg')";
    } else if (weather === "Rainy") {
        daySpan.style.backgroundImage = "url('images/rainyimg.jpg')";
    } else if (weather === "Cloudy") {
        daySpan.style.backgroundImage = "url('images/cloudyimg.png')";
    }


    daySpan.style.backgroundSize = "cover";
    daySpan.style.backgroundPosition = "center";


    daySpan.style.color = "#fff"; 
    daySpan.style.position = "relative";
    daySpan.style.fontWeight = "bold";
    daySpan.style.display = "flex";
    daySpan.style.alignItems = "center";
    daySpan.style.justifyContent = "center";


    const textBackground = document.createElement('div');
    textBackground.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // with slight transparency
    textBackground.style.padding = "5px";
    textBackground.style.zIndex = "1";
    textBackground.textContent = daySpan.textContent;


    daySpan.textContent = "";
    daySpan.appendChild(textBackground);


    container.appendChild(daySpan);
});
