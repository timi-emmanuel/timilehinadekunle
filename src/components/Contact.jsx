import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-dark text-white py-20 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div className="text-center mb-10" variants={item}>
          <div className="flex flex-col items-center gap-4 mx-auto mb-4">
            <h2 className="text-5xl font-bold text-white text-center relative inline-flex items-center justify-center">
              Contact Me
              <span className="text-4xl text-primary absolute -right-4 bottom-[-0.20em]">
                &#8226;
              </span>
            </h2>
          </div>
          <p className="text-light text-sm">
            Have a question or want to work together? Let’s connect!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          action="https://formspree.io/f/mqkrgyvn" // Replace with your own Formspree or Netlify URL
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-grayDark p-4 rounded text-white placeholder-light outline-none focus:ring-2 focus:ring-primary"
            required
            variants={item}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-grayDark p-4 rounded text-white placeholder-light outline-none focus:ring-2 focus:ring-primary"
            required
            variants={item}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="bg-grayDark p-4 rounded text-white placeholder-light outline-none focus:ring-2 focus:ring-primary md:col-span-2"
            required
            variants={item}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded w-full md:w-fit hover:opacity-80 transition md:col-span-2"
            variants={item}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
