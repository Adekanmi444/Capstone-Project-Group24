function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-text">
        <h2>How Planetary Data<br />Helps Us Understand<br />Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{" "}
          <span>mass, diameter, gravity</span>, and <span>density</span>, we
          gain insight into how planets form, behave, and interact within the
          solar system.
        </p>
      </div>
      <div className="video-wrapper">
        <video autoPlay muted loop>
          <source
            src="https://www.shutterstock.com/shutterstock/videos/3757199579/preview/stock-footage-solar-system-model-the-sun-and-planets-with-its-characteristics-d-illustration.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default VideoSection