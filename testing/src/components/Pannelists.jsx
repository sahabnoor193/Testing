// src/pages/ILSSpeakers.jsx
import PannelistCard from '../components/PannelistCard';
import PannelistsData from '../data/PannelistData';
import React from 'react';

const Pannelists = () => {
  return (
    
    <div className=" text-white py-10 px-5 "
    >
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Pannelists</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {PannelistsData.map((pannelist, index) => (
          <PannelistCard
            key={index}
            name={pannelist.name}
            title={pannelist.title}
            img={pannelist.img}
          />
        ))}
        
      </div>
    </div>
  );
};
export default Pannelists;