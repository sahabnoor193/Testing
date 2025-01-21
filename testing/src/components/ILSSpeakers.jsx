// src/pages/ILSSpeakers.jsx
import SpeakerCard from '../components/SpeakerCard';
import speakersData from '../data/SpeakerData';
import background from '../assets/bg.jpg'; // Example path
import React from 'react';

// const ILSSpeakers = () => {
//   return (
//     <div className="min-h-screen bg-[#1a1a2e] py-12 px-6">
//       <div className="max-w-[1200px] mx-auto">
//         <h1 className="text-4xl font-bold text-center text-white mb-12">
//           ILS SPEAKERS
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {speakersData.map((speaker) => (
//             <SpeakerCard key={speaker.id} speaker={speaker} />
//           ))}
//         </div>
//       </div>
//     </div>s
//   );
// };

// export default ILSSpeakers;

const ILSSpeakers = () => {
  return (
    
    <div className=" text-white py-10 px-5"

    >
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">ILS SPEAKERS</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {speakersData.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            title={speaker.title}
            img={speaker.img}
          />
        ))}
      </div>
    </div>
  );
};
export default ILSSpeakers;