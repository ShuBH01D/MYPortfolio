


import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom website development with modern technologies and responsive design.",
      icon: "💻",
      category: "development"
    },

    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      category: "development"
    },
    {
      id: 4,
      title: "Frontend Development",
      description: "Building interactive user interfaces with React, Angular, and Vue.",
      icon: "⚛️",
      category: "development"
    },
    {
      id: 5,
      title: "Web Animation",
      description: "Engaging animations and interactive elements for websites.",
      icon: "✨",
      category: "design"
    },
    {
      id: 6,
      title: "Code Review",
      description: "Expert review and optimization of existing frontend codebases.",
      icon: "🔍",
      category: "consulting"
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <>
        <Header/>
    <div className="bg-gray-50 bg-gradient-to-r from-black via-gray-900 to-red-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">My Professional Services</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Delivering high-quality frontend solutions that help businesses create engaging digital experiences.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container bg-gradient-to-r from-black via-gray-900 to-red-900 mx-auto max-w-6xl py-8 px-4">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            All Services
          </button>
          <button 
            onClick={() => setActiveCategory('development')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'development' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Development
          </button>
          <button 
            onClick={() => setActiveCategory('design')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'design' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Design
          </button>
          <button 
            onClick={() => setActiveCategory('consulting')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'consulting' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Consulting
          </button>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white mt-16 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with stunning frontend development.
          </p>
          <Link to="/contact">

          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Me
          </button>
          </Link>
        </div>
      </div>

      
    </div>
    <Footer/>
    </>
  );
};

export default ServicesPage;