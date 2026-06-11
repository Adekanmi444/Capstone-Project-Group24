import { useState } from "react";

function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(() => {
        setMessage("✅ Form submitted successfully!");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("❌ There was a problem submitting your form. Please try again.");
      });
  };

  return (
    <section aria-labelledby="contact-title">
      <h2 id="contact-title">Have Questions About Planetary Science?</h2>

      <p>
        Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? <br />
        Reach out and we'll get back to you.
      </p>

      <form id="contact" onSubmit={handleSubmit}>
        <fieldset>
          {/* Name */}
          <div>
            <label htmlFor="name">
              Full Name <span aria-hidden="true">*</span>
            </label>
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

          {/* Email */}
          <div>
            <label htmlFor="email">
              Email <span aria-hidden="true">*</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone">
              Phone Number <span aria-hidden="true">*</span>
            </label>
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

          {/* Message */}
          <div>
            <label htmlFor="message">
              Message <span aria-hidden="true">*</span>
            </label>
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

          {/* Submit */}
          <div>
            <button type="submit">Submit {">"}</button>
          </div>
        </fieldset>
      </form>

      {/* Feedback message */}
      {message && <p>{message}</p>}
    </section>
  );
}

export default ContactForm;
