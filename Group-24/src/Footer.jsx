function Footer() {
  return (
    <footer className="site-footer">
      <section className="about" aria-labelledby="team-heading">
        <h2 id="team-heading">About</h2>

        <ul className="team-list">
          <li>Adekanmi</li>
          <li>Gbolahan</li>
          <li>Bamidele</li>
          <li>Elizabeth</li>
          <li>Adetunji</li>
          <li>Fathia</li>
          <li>Biola</li>
          <li>Oluwajomiloju</li>
          <li>Ahmed</li>
          <li>David</li>
          <li>Divine</li>
          <li>Favour</li>
          <li>Divine</li>
          <li>Shalom</li>
        </ul>
      </section>

      <hr className="footer-divider" />

      <div className="footer-credit">
        <p className="designer-credit">
          © 2026 Design by{" "}
          <a href="https://amakandukwu.com/">Amaka</a> &{" "}
          <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma A.</a>
        </p>

        <div className="footer-meta">
          <p>
            <span className="built-by">Built by Group 24.</span>{" "}
            <span className="rights">All rights reserved</span>
          </p>

          <a href="https://tsacademyonline.com/">TSAcademy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
