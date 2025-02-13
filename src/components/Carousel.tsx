//import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="w-full h-[640px] bg-gray-100 flex items-center justify-center">
      <Slider {...settings} className="w-[80%]">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="h-[600px] bg-white p-4">
            <div className="h-full bg-gray-300 flex items-center justify-center">
              <p className="text-black text-xl">Slide {item}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;