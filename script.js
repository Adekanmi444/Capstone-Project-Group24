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
