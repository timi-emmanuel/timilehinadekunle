const Contact = () => {
  return (
    <section id="contact" className="bg-grayDark text-white py-20 px-6 md:px-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Me</h2>
        <p className="text-light mb-6">Let’s work together or just say hello!</p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
