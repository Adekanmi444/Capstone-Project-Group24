import { useState } from "react"

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target

    fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setSubmitted(true)
        form.reset()
      })
      .catch(error => console.error("Error submitting form:", error))
  }

  return (
    <section aria-labelledby="contact-title">
      <h2 id="contact-title">Have Questions About Planetary Science?</h2>
      <p>
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      {submitted && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Thank you! Your message has been sent successfully.
        </p>
      )}

      <form id="contact" onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              minLength="10"
              maxLength="20"
              required
              placeholder="Full name"
            />
          </div>

          <div>
            <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength="11"
              placeholder="Please enter a valid phone number"
            />
          </div>

          <div>
            <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
            <br />
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="40"
              maxLength="100"
              required
              placeholder="Enter your message"
            ></textarea>
            <small>100 Characters</small>
          </div>

          <div>
            <button type="submit">Submit &gt;</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default ContactForm