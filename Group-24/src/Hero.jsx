function Hero() {
  return (
    <section className="hero-section" aria-label="hero-title">
      <div className="left-side">
        <h1>Explore Our Solar System <br />Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable <br />
          facts. From size and mass to gravity and density, this page <br />
          breaks down the solar-system in a clear, data-driven way.
        </p>

        <nav>
          <a href="#data-title" className="facts">Explore the Data</a>
          <a href="#contact" className="contact">Contact Us</a>
        </nav>
      </div>
      <div className="right-side">
        <img
          src="./World.svg"
          alt="image of the solar system"
          width="445"
          height="443"
        />
      </div>
    </section>
  );
}

export default Hero;
