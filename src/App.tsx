//import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import Carousel from './components/Carousel';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';
import './App.css';

const App = () => {
  return (
    <div>
      <CustomCursor />

      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[url('/hero-graphic3.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto items-center">
          <Hero />
        </div>
      </div>

      {/* Text + Carousel */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto items-center">
          <TextSection />
          <Carousel />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <AboutSection />
        </div>
      </div>

      {/* Footer Section - full width black background */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default App;
