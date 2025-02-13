//import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import Carousel from './components/Carousel';
import ContentSection from './components/ContentSection';

const App = () => {
  return (
    <div>
      {/* Header with full-width white background */}
      <div className='bg-white'>
        {/* Centered container for header content */}
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
      </div>

      {/* Hero with full-width black background */}
      <div className="bg-black">
        {/* Centered container for hero content */}
        <div className="max-w-7xl mx-auto items-center" >
          <Hero />
        </div>
      </div>

      {/* Centered container for the rest of the content */}
      <div className="max-w-7xl mx-auto">
        <TextSection/>
        <Carousel />
        <ContentSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default App;