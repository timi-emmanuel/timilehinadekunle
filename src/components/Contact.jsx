import { motion } from "framer-motion";
import { useState } from "react";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const suggestions = [
  "API Integration",
  "Landing Page",
  "Portfolio Website",
  "E-commerce Store",
  "Dashboard UI",
  "Frontend Revamp",
  "AI Automation"
];

const Contact = () => {
  const [subject, setSubject] = useState("");

  return (
    <motion.section
      id="contact"
      className="bg-dark text-white py-24 px-4 sm:px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div className="text-center mb-12" variants={item}>
          <div className="flex flex-col items-center gap-4 mx-auto mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center relative inline-flex items-center justify-center font-display">
              Contact Me
              <span className="text-4xl text-primary-500 absolute -right-4 bottom-[-0.20em]">
                &#8226;
              </span>
            </h2>
          </div>
          <p className="text-light text-base sm:text-lg">
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          action="https://formsubmit.co/adekemmanuel17@gmail.com"
          method="POST"
          className="glass-card p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="glass border border-white/10 p-4 rounded-lg text-white placeholder-light outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 smooth-transition bg-white/5"
            required
            variants={item}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="glass border border-white/10 p-4 rounded-lg text-white placeholder-light outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 smooth-transition bg-white/5"
            required
            variants={item}
          />

          {/* Subject Field */}
          <motion.div className="md:col-span-2" variants={item}>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="glass border border-white/10 p-4 rounded-lg text-white placeholder-light outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full smooth-transition bg-white/5"
              required
            />

            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 mt-4">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSubject(s)}
                  className="text-sm px-4 py-2 glass border border-primary/30 text-primary rounded-full hover:bg-primary/20 hover:border-primary/60 smooth-transition font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="glass border border-white/10 p-4 rounded-lg text-white placeholder-light outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 md:col-span-2 smooth-transition bg-white/5 resize-none"
            required
            variants={item}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="btn-primary w-full md:w-fit md:col-span-2 mx-auto md:mx-0"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
