import React, { useState } from 'react';
// import background from '../assets/bg.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-transparent  ">
      <div 
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden"

      >
        <div className="backdrop-blur-sm border-white p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Contact Form Section */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg text-white/90">
                  Feel free to reach out to us! We're here to help and answer any questions you might have.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 self-center"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="flex-1 h-[300px] lg:h-auto">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.496461796169!2d74.3405255!3d31.5379871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ebcc18c7bf%3A0x1c311b2dddb7ab8f!2sKinnaird%20College%20For%20Women%20University!5e0!3m2!1sen!2s!4v1729690252453!5m2!1sen!2s"
                  title="Google Map"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl -z-10"></div>
    </div>
  );
};

export default ContactUs;