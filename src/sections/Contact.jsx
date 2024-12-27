import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Use the environment variable
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Use the environment variable
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Use the environment variable
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent! Thank you for reaching out.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="w-full py-12 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full px-8 py-6 border border-green-500 rounded-lg"
      >
        <h2 className="text-2xl font-mono text-green-400 mb-8 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-mono text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black text-white border border-white rounded focus:outline-none focus:ring-0 transition-transform transform hover:scale-105"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-mono text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black text-white border border-white rounded focus:outline-none focus:ring-0 transition-transform transform hover:scale-105"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-mono text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full px-3 py-2 bg-black text-white border border-white rounded focus:outline-none focus:ring-0 transition-transform transform hover:scale-105"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-6 w-full py-3 bg-white text-black font-mono rounded hover:bg-gray-300 transition-transform transform hover:scale-105 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
