// src/components/SponsorCard.jsx
import React from 'react';

const SponsorCard = ({ img }) => {
  return (
    <div className="backdrop-blur-sm p-5 rounded-lg flex justify-center shadow-md transition-transform transform hover:scale-105">
      <img
        src={img}
        alt="Sponsor Logo"
        className="w-32 h-32 rounded-lg bg-gray-300 object-cover"
      />
    </div>
  );
};

export default SponsorCard;