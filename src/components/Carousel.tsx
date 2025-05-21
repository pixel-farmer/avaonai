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
    { id: 1, image: '/slide1.jpg', title: 'Slide 1', url: 'https://www.youtube.com/watch?v=h_vO__CV31Y' },
    { id: 2, image: '/slide2.jpg', title: 'Slide 2', url: 'https://www.youtube.com/watch?v=nMJQPGzGZWk' },
    { id: 3, image: '/slide3.jpg', title: 'Slide 3', url: 'https://www.youtube.com/watch?v=bvHKS5FdTsY' },
    { id: 4, image: '/slide1.jpg', title: 'Slide 4', url: 'https://www.youtube.com/watch?v=h_vO__CV31Y' },
    { id: 5, image: '/slide2.jpg', title: 'Slide 5', url: 'https://www.youtube.com/watch?v=nMJQPGzGZWk' },
  ];

  return (
    <div className="w-full h-[540px] bg-black flex items-center justify-center">
      <Slider {...settings} className="w-[100%]">
        {slides.map((slide) => (
          <div key={slide.id} className="h-[500px] bg-white p-4 shadow-lg rounded-lg overflow-hidden">
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