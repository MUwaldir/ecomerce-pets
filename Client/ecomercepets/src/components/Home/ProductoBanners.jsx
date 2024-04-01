import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductoBanners = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="w-full relative">
            <img className="w-full h-1/3 md:h-screen" src={banner.image} alt={banner.title} />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
              <h3 className="text-white">{banner.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductoBanners;
