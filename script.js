const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
});

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you for contacting us, ${name}! We’ll get back to you soon.`);
  this.reset();
});

// === Dynamic Attraction Info ===
const attractionLinks = document.querySelectorAll(".attraction-link");
const attractionInfo = document.getElementById("attraction-info");

const attractionData = {
  titanic: {
    title: "Titanic Experience",
    description: `
      Discover the story of the RMS Titanic in the city where it was built. 
      The Titanic Belfast museum offers nine interactive galleries that bring 
      the ship's history to life — from her construction and launch to her tragic end.`,
    image: "images/belfast-titanic-museum.jpg"
  },
  ssnomadic: {
    title: "SS Nomadic",
    description: `
      Step aboard the SS Nomadic — the last remaining White Star Line vessel. 
      This beautifully restored ship served as the tender for Titanic and now 
      offers an authentic glimpse into maritime life from the early 1900s.`,
    image: "images/SS_Nomadic.jpg"
  },
  slipways: {
    title: "Titanic Slipways",
    description: `
      Walk along the very slipways where Titanic and Olympic were constructed. 
      The original outlines of the ships are marked on the ground, offering 
      a powerful connection to the city's shipbuilding heritage.`,
    image: "images/titanic-slipways.jpg"
  }
};

// Handle click events
attractionLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const key = link.getAttribute("data-attraction");
    const info = attractionData[key];

    attractionInfo.innerHTML = `
      <h3>${info.title}</h3>
      <img src="${info.image}" alt="${info.title}" style="width:100%; border-radius:10px; margin-top:1rem;">
      <p style="margin-top:1rem;">${info.description}</p>
    `;
  });
});

