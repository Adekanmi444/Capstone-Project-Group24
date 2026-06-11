import { useEffect, useState } from "react";

function PlanetGallery() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.error("Error fetching planets:", error));
  }, []);

  return (
    <section id="visualize">
      <div className="visualize-inner">
        <h2>Visualizing the differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly <br />
          different terrestrial planets are from gas giants and ice giants.
        </p>

        <div id="planet-visuals">
          {planets.map((planet) => (
            <figure key={planet.planet}>
              <img src={planet.image} alt={planet.planet} />
              <div className="card-content">
                <p className="planet-name">{planet.planet}</p>
                <p className="planet-distance">
                  {planet.distanceFromSun} million km from the Sun
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlanetGallery;
