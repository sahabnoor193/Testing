import React from 'react';
import ILSSpeakers from './ILSSpeakers';
import Pannelists from './Pannelists';
import background from '../assets/bg.jpg';

function Speakers() {
  return (
    <>
     <div
      className="mt-6 ml-6 mr-6 mb-6 rounded-3xl text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ILSSpeakers/>
      <Pannelists/>
      {/* <Footer /> */}
      </div>
    </>

  );
}

export default Speakers;