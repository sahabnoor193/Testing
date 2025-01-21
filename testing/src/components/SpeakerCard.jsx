
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SpeakerCard = ({ name, title, img }) => {
  return (
    <div className="backdrop-blur-sm p-4 md:p-6 rounded-lg flex flex-col items-center shadow-md transition-transform transform hover:scale-105 w-full max-w-[240px] mx-auto">
      {/* Responsive size for the circle */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 bg-gray-300">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-base md:text-lg font-bold text-white text-center">{name}</h2>
      <p className="text-xs md:text-sm text-gray-300 text-center mb-3">{title}</p>
      <div className="flex justify-center space-x-4 mt-1">
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <FaEnvelope className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;