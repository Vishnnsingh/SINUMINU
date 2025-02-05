import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 relative md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Company Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            <img src={Logo} alt="Company Logo" className="w-24 h-24 object-contain" />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link to="#" className="hover:opacity-80">
            <img src={Logo} alt="Facebook" className="w-8 h-8 object-contain" />
          </Link>
          <Link to="#" className="hover:opacity-80">
            <img src={Logo} alt="Twitter" className="w-8 h-8 object-contain" />
          </Link>
          <Link to="#" className="hover:opacity-80">
            <img src={Logo} alt="Instagram" className="w-8 h-8 object-contain" />
          </Link>
          <Link to="#" className="hover:opacity-80">
            <img src={Logo} alt="LinkedIn" className="w-8 h-8 object-contain" />
          </Link>
        </div>

        {/* Subscribe */}
        <div className="mb-4 md:mb-0">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 rounded-md text-amber-400 border-2 border-amber-200"
          />
          <button
            onClick={handleSubscribe}
            className="ml-2 px-4 py-1 bg-amber-500 rounded-md hover:bg-amber-600"
          >
            Subscribe
          </button>
        </div>

        {/* Contact Information */}
        <div className="space-y-2 text-center md:text-left">
          <p>Call Us: <a href="tel:+1234567890" className="hover:text-amber-400">+91 7004823410</a></p>
          <p>Email: <a href="mailto:contact@company.com" className="hover:text-amber-400">contact@sinuminuanimation.com</a></p>
          <Link to="#" className="hover:text-amber-400 block">Terms & Conditions</Link>
          <Link to="#" className="hover:text-amber-400 block">Privacy Policy</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Vishnu Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
