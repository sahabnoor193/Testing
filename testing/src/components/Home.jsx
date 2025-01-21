import React from 'react';
import Navbar from './Navbar';
import background from '../assets/bg.jpg'; // Ensure the path is correct
import Footer from './Footer';
import cover from '../assets/loog.png'; // Your illustration image
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div
        className="flex flex-col md:flex-row min-h-screen bg-cover bg-center relative mt-4 mx-4 md:mx-6 mb-6 rounded-3xl"
        
      >
        {/* Left Column for Content */}
        <div className="flex flex-col justify-center items-start text-white p-4 md:ml-10 w-full md:w-1/2">
        <h1 className="text-2xl md:text-6xl  font-bold mb-4 md:whitespace-nowrap">Welcome to IEEE Women in Engineering</h1>
        <h1 className="text-2xl md:text-6xl  mb-6 font-bold md:whitespace-nowrap">International Leadership Summit 2025</h1>
          
           {/* Event Details */}
  <div className="p-6 rounded-lg mt-6 sm:mt-20 shadow-lg mb-6 text-left">
    <div className="flex items-center mb-4 justify-start ">
      <FaCalendarAlt className="mr-2 text-3xl md:text-6xl text-[#e065c5]" />
      <p className="text-2xl md:text-5xl md:ml-3 font-bold mb-1">April 7-8, 2025</p>
    </div>
    <div className="flex items-center mb-4 justify-start">
      <FaMapMarkerAlt className="mr-2 text-4xl md:text-6xl mb-10 md:mb-0 text-[#e065c5]" />
      <div className=''>
  <p className="text-2xl md:text-5xl md:ml-3 font-bold mb-1 mt-8">Kinnaird College for Women</p>

<p className='text-lg md:text-3xl ml-3 md:ml-4'>93 Jail Rd, G.O.R.-I, Lahore, Punjab</p>
</div>
    </div>
   
  </div>
        </div>

        {/* Right Column for Cover Image */}
        <div className="flex w-full md:w-1/2">
          <img src={cover} alt="Cover Illustration" className='w-full h-auto rounded-lg' />
        </div>
      </div>
      
      {/* <Footer /> */}
    </>
  );
}

export default Home;