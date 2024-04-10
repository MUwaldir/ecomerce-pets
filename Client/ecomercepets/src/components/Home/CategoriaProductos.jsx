import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoriaProductos.css";
import { Link } from "react-router-dom";

const CategoriaProductos = ({ categorias, productos }) => {
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

  const categoriasConProductos = categorias.map((categoria) => {
    // Filtrar los productos para esta categoría
    const productosDeCategoria = productos.filter(
      (producto) => producto.categoria === categoria.id
    );

    // Agregar los productos a la categoría
    return {
      ...categoria,
      productos: productosDeCategoria,
    };
  });

  console.log(categoriasConProductos);

  return (
    <div className="categoria-productos">
      {categoriasConProductos.map((categoria) => (
        <div
          key={categoria.id}
          className="categoria bg-white shadow-md rounded-md p-4 overflow-hidden"
        >
          <h2 className="text-xl md:text-4xl font-semibold mb-4 text-center">
            {categoria.nombre}
          </h2>

          <p className="text-gray-600 md:text-2xl mb-4 text-center">
            {categoria.descripcion}
          </p>
          {categoria.productos.length > 5 ? (
            <Slider {...settings} className=" ">
              {categoria.productos
                .slice(0, 6) // Tomar solo los primeros 6 productos o menos
                .map((producto) => (
                  <div key={producto.id} className="w-full ">
                    <div className="producto flex flex-col items-center text-center mx-auto ">
                      <div className="relative">

                      <img
                        className="w-64 h-32 object-cover rounded-md mb-2"
                        src={producto.image}
                        alt={producto.name}
                      />
                      <div className="opciones absolute bottom-2 text-white bg-gray-400 w-full">
                      <Link to={`/products/${producto.id}`}>ver detalle</Link>
                    </div>
                      </div>
                      <h3 className="text-base font-semibold mb-1">
                        {producto.name}
                      </h3>
                      <p className="text-gray-600">${producto.price}</p>
                    
                    </div>
                  </div>
                ))}
            </Slider>
          ) : (
            "No ahy sufuceinte productos en la categoria"
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriaProductos;
