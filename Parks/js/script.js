// Class to represent an attraction
  // This class is used to create an object for each attraction with its details
class Attraction {
    constructor({ name, location, hours, price }) {
      this.name = name;
      this.location = location;
      this.hours = hours;
      this.price = price;
    }
  
    getDetails() {
      return `Name: ${this.name}
      Location: ${this.location}
      Hours: ${this.hours}
      Price: ${this.price}`;
    }
  }
  
  // List of parks attraction data 
  const attractionsData = {
    waterPark: {
      name: "Water Park",
      location: "101 Bear Street, Lewes, DE",
      hours: "24/7",
      price: "Free",
      bg: "url('images/waterpark.jpg')"
    },
    skatingPark: {
      name: "Skating Park",
      location: "202 Fox Lane, Lewes, DE",
      hours: "8 AM - 10 PM",
      price: "$10",
      bg: "url('images/skate.jpg')"
    },
    arcadePark: {
      name: "Arcade and VR Park",
      location: "303 Game Street, Lewes, DE",
      hours: "10 AM - 12 AM",
      price: "$15",
      bg: "url('images/vr.jpg')"
    }
  };
  
  // Function to create the list of attractions dynamically
document.querySelector('.container').addEventListener('click', (e) => {
    const id = e.target.id;
    if (attractionsData[id]) {
      const data = attractionsData[id];
      const attraction = new Attraction(data);
      const info = document.getElementById('info');
      info.innerHTML = attraction.getDetails();
      info.classList.add('active');
      document.body.style.backgroundImage = data.bg;
    }
  });

  document.getElementById("morePlaces").addEventListener("click", () => {
    window.location.href = "pages/more.html";
  });
  
  document.getElementById("addPlace").addEventListener("click", () => {
    window.location.href = "pages/add.html";
  });
  