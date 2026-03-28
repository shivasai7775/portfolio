"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🕷️ Thanks for your message! I'll swing by to respond soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Peter Parker" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="peter@dailybugle.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="Project Discussion" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Tell me about your project..." required />
      </div>
      <button type="submit" className="btn-submit">
        🕷️ Send Message
      </button>
    </form>
  );
}
