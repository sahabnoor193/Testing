import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#28112E] text-white p-6 md:p-8 lg:p-10 m-4 md:m-6 rounded-2xl">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Follow Us</h1>
        
        {/* Social Media Links */}
        <div className="mb-6 flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition duration-200">
            <FaFacebook size={32} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition duration-200">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition duration-200">
            <FaLinkedin size={32} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition duration-200">
            <FaInstagram size={32} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm mb-1">Address: Kinnaird College for Women University, Lahore, Pakistan</p>
          <p className="text-sm mb-1">Phone: <a href="tel:+9242111000000" className="text-white hover:text-[#e065c5]">+92 42 111 000 000</a></p>
          <p className="text-sm">Email: <a href="mailto:info@kinnaird.edu.pk" className="text-white hover:text-[#e065c5]">info@kinnaird.edu.pk</a></p>
        </div>

        <p className='mb-2 text-gray-500 text-sm'>Content © Copyright 2025 WIE-ILS</p>
      </div>
    </footer>
  );
};

export default Footer;