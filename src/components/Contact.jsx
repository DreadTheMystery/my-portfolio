import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(
      `Hi Abdulgafar,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
    );

    window.open(
      `mailto:abdulgafarridwan@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-content">
        <div className="contact-content">
          <p className="contact-description">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind, want to discuss potential work,
            or just want to say hello, I'd love to hear from you.
          </p>

          <form action="https://formspree.io/f/xgvllldd" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project or just say hello..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
