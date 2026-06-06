const planetVisuals = document.getElementById("planet-visuals");
fetch("https://anurella.github.io/json/planets.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(planet => {
      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = planet.image;
      img.alt = planet.planet;

      const content = document.createElement("div");
      content.className = "card-content";

      const planetName = document.createElement("p");
      planetName.className = "planet-name";
      planetName.textContent = planet.planet;

      const planetDistance = document.createElement("p");
      planetDistance.className = "planet-distance";
      planetDistance.textContent = `${planet.distanceFromSun} million km from the Sun`;

      content.appendChild(planetName);
      content.appendChild(planetDistance);

      figure.appendChild(img);
      figure.appendChild(content);

      planetVisuals.appendChild(figure);
    });
  })
  .catch(error => console.error("Error fetching planets:", error));


  // FORM SUBMISSION
const form = document.getElementById("contact");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop default reload

  const formData = new FormData(form);

  fetch("https://whitebricks.com/tsacademy.php", {
    method: "POST",
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      alert("✅ Form submitted successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("❌ There was a problem submitting your form. Please try again.");
    });
});
