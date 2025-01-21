import React from 'react';

const TeamCard = ({ name, title, img }) => {
  return (
    <div className=" p-4 rounded-lg flex flex-col items-center  h-full w-full -mx-2"> 

      {/* <img
        src={img}
        alt={name}
        className="w-28 h-28 rounded-full mb-4 bg-gray-300 object-cover"
      /> */}

      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 bg-gray-300">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-lg font-bold text-white text-center">{name}</h2>
      <p className="text-sm text-gray-300 text-center mb-4">{title}</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;