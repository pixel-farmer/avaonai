//import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Carousel component
const Carousel = () => {
  const slides = [
    { id: 1, image: '/slide1.jpg', title: 'Slide 1', url: 'https://memelicious.vercel.app/' },
    { id: 2, image: '/slide2.jpg', title: 'Slide 2', url: 'https://example.com/slide2' },
    { id: 3, image: '/slide2.jpg', title: 'Slide 3', url: 'https://example.com/slide3' },
    { id: 4, image: '/slide2.jpg', title: 'Slide 4', url: 'https://example.com/slide4' },
    { id: 5, image: '/slide2.jpg', title: 'Slide 5', url: 'https://example.com/slide5' },
  ];

  return (
    <div className="w-full h-[640px] bg-black flex items-center justify-center">
      <Slider {...settings} className="w-[80%]">
        {slides.map((slide) => (
          <div key={slide.id} className="h-[600px] bg-white p-4 shadow-lg rounded-lg overflow-hidden">
            <div className="h-full flex items-center justify-center relative">
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={slide.image}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;