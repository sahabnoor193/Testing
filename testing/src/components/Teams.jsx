import React from "react";
import TeamCard from "./TeamCard";
import teamData from "../data/TeamData";
import background from '../assets/bg.jpg'; // Example path

const Teams = () => {
    return (
      <div className=" text-white py-10 px-5 mt-6 ml-6 mr-6 mb-6 rounded-3xl"
    
      >
        <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Meet Our Team</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-16 grid-auto-flow-dense">
          {teamData.map((team, index) => (
            <TeamCard 
            key={index} team={team} 
            name={team.name}
            title={team.title}
            img={team.img}/>
            ))}
        </div>
      </div>
    );
  };
  export default Teams;