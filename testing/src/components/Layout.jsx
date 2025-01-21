import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import background from '../assets/bg.jpg'; // Adjust the path to your background image

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div
          className="flex flex-col min-h-screen bg-cover bg-center relative mt-4 mx-4 md:mx-6 mb-6 rounded-3xl"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="rounded-3xl p-4">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;