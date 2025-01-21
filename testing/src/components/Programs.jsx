import React from 'react';

const SCHEDULE = [
  {
    time: "9:00 - 11:30 AM",
    event: "Exploratory Data Analysis Workshop",
    room: "Room 101"
  },
  {
    time: "12:00 - 12:10 PM",
    event: "Introduction and Welcome Remarks",
    room: "Main Hall"
  },
  {
    time: "12:10 - 12:40 PM",
    event: "Keynote Session 1: Celebrating IEEE's Legacy: 140 Years of Innovation - Ms. Asma Basharat",
    room: "Auditorium A"
  },
  {
    time: "12:40 - 1:10 PM",
    event: "Keynote Session 2: Pursuing Higher Education Abroad - Mr. Ali Gohar",
    room: "Auditorium A"
  },
  {
    time: "1:10 - 1:40 PM",
    event: "Keynote Session 3: Empowering Women in the Workforce - Ms. Faryal Fahim",
    room: "Auditorium B"
  },
  {
    time: "1:40 - 2:10 PM",
    event: "Keynote Session 4: Motivational Insights on Securing Your First Job - Mr. Yasir Awan",
    room: "Auditorium B"
  },
  {
    time: "2:10 - 2:25 PM",
    event: "Prize Distribution and Award Ceremony",
    room: "Main Hall"
  },
  {
    time: "2:25 - 2:35 PM",
    event: "Group Pictures, Anthems",
    room: "Garden Area"
  },
  {
    time: "2:35 - 2:50 PM",
    event: "Closing Remarks and Wrap-up",
    room: "Main Hall"
  },
  {
    time: "2:50 - 3:20 PM",
    event: "Refreshments for Guests and Networking Session",
    room: "Dining Hall"
  }
];

function Programs() {
  return (
    <div className="container mx-auto px-4 py-12 relative min-h-screen bg-transparent">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        EVENT TIMELINE
      </h1>

      <div className="bg-transparent backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden border border-white/20">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-[1fr,2fr,1fr] bg-white/5">
          {/* Header */}
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">Time</div>
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">Event</div>
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">Room</div>

          {/* Schedule Items */}
          {SCHEDULE.map((item, index) => (
            <React.Fragment key={index}>
              <div className="p-4 text-white border-b border-white/20 text-center hover:bg-white/10 transition-colors">
                {item.time}
              </div>
              <div className="p-4 text-white border-b border-white/20 text-center font-medium hover:bg-white/10 transition-colors">
                {item.event}
              </div>
              <div className="p-4 text-white border-b border-white/20 text-center hover:bg-white/10 transition-colors">
                {item.room}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {SCHEDULE.map((item, index) => (
            <div 
              key={index} 
              className="p-4 border-b border-white/20 hover:bg-white/10 transition-colors"
            >
              <div className="text-white/80 text-sm mb-1">{item.time}</div>
              <div className="text-white font-medium mb-1">{item.event}</div>
              <div className="text-white/80 text-sm">{item.room}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl -z-10"></div>
    </div>
  );
}

export default Programs;