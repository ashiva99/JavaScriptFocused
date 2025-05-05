if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "/login.html";
}


const videosList = [
    { videoId: "xwKbtUP87Dk", title: "Java Script Basics", 
        description: "As a basic starting point, we will discuss variables, events & functions (ft.conditional statements) as a way to explore the dynamic functionality we can add to our web pages by including JavaScript." },
    { videoId: "FtaQSdrl7YA", title: "JavaScript Tutorial for Beginners", 
        description: "JavaScript Tutorial for Beginners - Full JavaScript Course to learn JavaScript with Hands-On Examples and get the Complete Picture of Web Development." },
        {
            videoId: "IsG4Xd6LlsM",
            title: "JavaScript Variables and Data Types",
            description: "Learn how to declare variables using var, let, const and explore different data types in JavaScript."
        },
        {
            videoId: "gB1F9G0JXOo",
            title: "JavaScript Functions Explained",
            description: "Understand function declarations, expressions, parameters, return values, and scope."
        },
        {
            videoId: "_Xf6g1ZYxiI",
            title: "JavaScript Loops: for, while, do-while",
            description: "Master different types of loops and when to use each for efficient control flow."
        },
        {
            videoId: "R8rmfD9Y5-c",
            title: "JavaScript Arrays and Array Methods",
            description: "Explore array creation, iteration, and common methods like push, map, filter, and reduce."
        },
        {
            videoId: "rLPwCAqyCAE",
            title: "JavaScript Objects and Properties",
            description: "Learn how to define, access, and manipulate objects and their properties."
        },
        {
            videoId: "y17RuWkWdn8",
            title: "JavaScript DOM Manipulation Basics",
            description: "Interact with HTML elements using JavaScript to change content, style, and structure."
        },
        {
            videoId: "PoRJizFvM7s",
            title: "JavaScript Event Handling",
            description: "Understand how to handle user interactions using event listeners and handlers."
        },
        {
            videoId: "T-HGdc8L-7w",
            title: "JavaScript ES6 Classes Tutorial",
            description: "Get introduced to ES6 class syntax and understand constructors, inheritance, and methods."
        },
        {
            videoId: "cuEtnrL9-H0",
            title: "JavaScript Arrow Functions and Scope",
            description: "Learn the syntax and lexical scoping behavior of arrow functions compared to traditional ones."
        },
        {
            videoId: "vn3tm0quoqE",
            title: "JavaScript Promises and Async/Await",
            description: "Manage asynchronous operations with Promises, then simplify them using async/await."
        }
];

function loadVideos() {
    const container = document.getElementById("video-container");
    container.innerHTML = "";

    videosList.forEach(video => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4 col-sm-12 mb-4 d-flex flex-column align-items-center";

        // Embed video using Bootstrap 5 ratio
        const ratioDiv = document.createElement("div");
        ratioDiv.className = "ratio ratio-16x9 w-100";

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${video.videoId}?rel=0`;
        iframe.allowFullscreen = true;

        ratioDiv.appendChild(iframe);

        // Video details
        const detailDiv = document.createElement("div");
        detailDiv.className = "detail-bg w-100";

        const title = document.createElement("h1");
        title.className = "detail-heading";
        title.textContent = video.title;

        const description = document.createElement("p");
        description.className = "detail-paragraph";
        description.textContent = video.description;

        detailDiv.appendChild(title);
        detailDiv.appendChild(description);

        // Combine all
        colDiv.appendChild(ratioDiv);
        colDiv.appendChild(detailDiv);
        container.appendChild(colDiv);
    });
}


// Load videos on page load
document.addEventListener("DOMContentLoaded", loadVideos);