






import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import myimage from "./assets/images/myimage.png";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import project from "./assets/images/project.png"

console.log("✅ Importing Header Component...");

function App() {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-red-900">
          <div className="container mx-auto px-4 py-12">
            {/* Mobile Layout */}
            {isMobile && (
              <div className="flex flex-col items-center">
                {/* Text content */}
                <div className="w-full text-white mb-8">
                  <div className="mb-8">
                    <p className="text-lg mb-2">
                      <span className="mr-2">Hey</span>👋<span className="ml-2">I'm</span>
                    </p>
                    <h1 className="text-5xl font-bold mb-2">Shubham</h1>
                    <h2 className="text-3xl font-semibold mb-2">Frontend developer</h2>
                    <p className="text-xl">From pune </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-8">
                    {/* Services Section */}
                    <Link to="/services">
                      <div className="border border-gray-600 rounded p-3 hover:border-white transition-colors">
                        <p className="text-center text-sm mb-2">Services</p>
                        <div className="flex justify-center space-x-1">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                          </div>
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">Ai</span>
                          </div>
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">Ps</span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Projects Section */}
                    <Link to="/projects">
                      <div className="border border-gray-600 rounded p-3 hover:border-white transition-colors cursor-pointer">
                        <p className="text-center text-sm mb-2">Projects</p>
                        <div className="flex justify-center">
                          <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                            <div className=" bg-gray-700 rounded">
                            <img src={project} alt= "Microsoft Project Logo"className="w-8 h-8"  />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* About Section */}
                    <Link to="/about">
                      <div className="border border-gray-600 rounded p-3 hover:border-white transition-colors">
                        <p className="text-center text-sm mb-2">About</p>
                        <div className="flex justify-center">
                          <span className="text-red-600 font-bold text-xl">A</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full flex justify-center mt-8">
                  <div className="relative">
                    <div className="w-64 h-64 bg-transparent relative">
                      {/* Image Container */}
                      <div className="w-full h-full bg-gradient-to-r from-gray-700 to-red-900 rounded-md flex items-center justify-center text-white relative">
                        {/* Circle - Behind Only the Image */}
                        <div className="absolute top-1/4 right-8 w-40 h-40 border-4 border-red-600 rounded-full border-r-1 border-b-0 z-0"></div>

                        {/* Image (Above the Circle) */}
                        <img
                          src={myimage}
                          alt="Sample"
                          className="w-full h-full object-cover rounded-md relative z-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Layout */}
            {!isMobile && (
              <div className="flex flex-row items-center justify-between">
                {/* Left side - Text content */}
                <div className="w-1/2 text-white">
                  <div className="mb-8">
                    <p className="text-lg mb-2">
                      <span className="mr-2">Hey</span>👋<span className="ml-2">I'm</span>
                    </p>
                    <h1 className="text-7xl font-bold mb-2">Shubham</h1>
                    <h2 className="text-4xl font-semibold mb-2">Frontend developer</h2>
                    <p className="text-xl">From pune </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-12">
                    {/* Services Section */}
                    <Link to="/services">
                      <div className="border border-gray-600 rounded p-6 hover:border-white transition-colors">
                        <p className="text-center mb-4">Services</p>
                        <div className="flex justify-center space-x-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">Ai</span>
                          </div>
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">Ps</span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Projects Section */}
                    <Link to="/projects">
                      <div className="border border-gray-600 rounded p-4 hover:border-white transition-colors cursor-pointer">
                        <p className="text-center mb-4">Projects</p>
                        <div className="flex justify-center">
                          <div className="w-16 h-12 bg-gray-800 rounded flex items-center justify-center">
                            <div className=" bg-gray-700 rounded">
                            <img src={project} alt= "Microsoft Project Logo"className="w-10 h-10"  />
  
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* About Section */}
                    <Link to="/about">
                      <div className="border border-gray-600 rounded p-6 hover:border-white transition-colors">
                        <p className="text-center mb-4">About</p>
                        <div className="flex justify-center">
                          <span className="text-red-600 font-bold text-2xl">A</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right side - Image - Moved down and increased size */}
                <div className="w-1/2 flex justify-center items-start pt-16">
                  <div className="relative">
                    <div className="w-96 h-96 bg-transparent relative">
                      {/* Image Container */}
                      <div className="w-full h-full bg-gradient-to-r from-gray-700 to-red-900 rounded-md flex items-center justify-center text-white relative">
                        {/* Circle - Behind Only the Image - Adjusted for larger image */}
                        <div className="absolute top-1/4 right-12 w-64 h-48 border-4 border-red-600 rounded-full border-r-1 border-b-0 z-0"></div>

                        {/* Image (Above the Circle) */}
                        <img
                          src={myimage}
                          alt="Sample"
                          className="w-full h-full object-cover rounded-md relative z-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;