import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row gap-8 md:gap-28 items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-xl p-8 max-w-lg w-full"
      >
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <div className="mt-8 md:mt-0 w-full max-w-lg">
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509505!2d144.9537353153183!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e6d9f03d0c0!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1614227746411!5m2!1sen!2sau"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <h1 className='text-center mt-9'>Address</h1>
        <p className="text-center text-gray-600 mt-2">
          123 Company Street, Tech City, Innovation State, 45678
        </p>
      </div>
    </div>
  );
};

export default Contact;