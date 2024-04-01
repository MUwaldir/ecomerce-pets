import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CategoriaProductos.css'

const CategoriaProductos = ({ categorias }) => {
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 640px)" });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isExtraLargeScreen
      ? 4
      : isLargeScreen
      ? 3
      : isMediumScreen
      ? 2
      : isSmallScreen
      ? 1
      : 1, // Mostrar 4 productos en laptops o PCs, y 1 en otros dispositivos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="categoria-productos">
      {categorias.map((categoria) => (
        <div
          key={categoria.id}
          className="categoria bg-white shadow-md rounded-md p-4 overflow-hidden"
        >
          <h2 className="text-xl font-semibold mb-4">{categoria.nombre}</h2>
          <img
            className="sm:w-1/5 h-32 object-cover rounded-md mb-4"
            src={categoria.imagen}
            alt={categoria.nombre}
          />
          <p className="text-gray-600 mb-4">{categoria.descripcion}</p>
          <Slider {...settings} className=" ">
            {categoria.productos.slice(0, 6).map((producto) => (
              <div key={producto.id} className="w-full ">
                <div className="producto flex flex-col  items-center text-center mx-auto ">
                  <img
                    className="w-64 h-32 object-cover rounded-md mb-2"
                    src={producto.image}
                    alt={producto.name}
                  />
                  <h3 className="text-base font-semibold mb-1">
                    {producto.name}
                  </h3>
                  <p className="text-gray-600">${producto.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default CategoriaProductos;
