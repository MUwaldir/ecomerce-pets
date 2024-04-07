import React, { useState } from "react";
import { BsGrid1X2, BsGrid3X2, BsGrid3X3 } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import accesorios from "../utils/accesorios";
import Filtros from "../components/Products/Filtros";
import categorias from "../utils/categorias";
import Paginacion from "../components/Products/Paginacion";
import ModalCarrito from "../components/Carrito/ModalCarrito";

const Products = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [tipoAccesorioSeleccionado, setTipoAccesorioSeleccionado] =
    useState("");
  const [costoSeleccionado, setCostoSeleccionado] = useState(0);

  const [columnas, setColumnas] = useState(3); // Estado para almacenar la cantidad de columnas seleccionadas
  const [currentPage, setCurrentPage] = useState(1);
  const products = accesorios;
  const isAuthenticated = true;

  const [modalCarrito, setModalCarrito] = useState(false);

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const handleTipoAccesorioChange = (tipo) => {
    setTipoAccesorioSeleccionado(tipo);
  };

  const handleCostoChange = (costo) => {
    setCostoSeleccionado(costo);
  };

  const handleChangeColumnas = (numColumnas) => {
    setColumnas(numColumnas);
  };

  const filtrarProductos = (product) => {
    // Filtrar por categoría
    if (categoriaSeleccionada && product.categoria !== categoriaSeleccionada) {
      return false;
    }
    // Filtrar por tipo de accesorio
    if (
      tipoAccesorioSeleccionado &&
      product.tipo !== tipoAccesorioSeleccionado
    ) {
      return false;
    }
    // Filtrar por costo
    if (costoSeleccionado && product.costo > costoSeleccionado) {
      return false;
    }
    return true;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productsPerPage = 9;

  // Calcular el índice del último producto en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calcular el índice del primer producto en la página actual
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Obtener los productos de la página actual
  const currentProducts = products
    .filter(filtrarProductos)
    .slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProducts = products.filter(filtrarProductos).length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  console.log(modalCarrito)
  console.log(localStorage.getItem("carrito"))
  return (
    <div className="container flex mx-auto mt-8 ">
      {/* Sidebar para filtros */}
      <div className="w-1/4 mr-8">
        {/* Componente Filtros */}

        <Filtros
          categorias={categorias}
          onCategoriaChange={handleCategoriaChange}
          onTipoAccesorioChange={handleTipoAccesorioChange}
          onCostoChange={handleCostoChange}
        />
      </div>
      {/* Contenido principal de los productos */}
      <div className="w-3/4">
        {/* Opciones de visualización de productos */}
        <div className="flex justify-end mb-4">
          <button
            className={`mr-2 ${
              columnas === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            } px-4 py-2 rounded-md`}
            onClick={() => handleChangeColumnas(2)}
          >
            <BsGrid1X2 size={24} className="mr-1" />
          </button>
          <button
            className={`mr-2 ${
              columnas === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            } px-4 py-2 rounded-md`}
            onClick={() => handleChangeColumnas(3)}
          >
            <BsGrid3X2 size={24} className="mr-1" />
          </button>
          <button
            className={`mr-2 ${
              columnas === 4
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            } px-4 py-2 rounded-md`}
            onClick={() => handleChangeColumnas(4)}
          >
            <BsGrid3X3 size={24} className="mr-1" />
          </button>
        </div>
        {/* Mostrar productos en función del número de columnas */}
        <Paginacion
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* <div className={`grid grid-cols-1  ${columnas===4&&"sm:grid-cols-4"} ${columnas===3&&"sm:grid-cols-3"} ${columnas===2&&"sm:grid-cols-2"} gap-4`}> */}
        <div
          className={`grid grid-cols-1 ${
            columnas > 1 ? `sm:grid-cols-${columnas}` : ""
          } gap-4`}
        >
          {/* Muestra de productos filtrados */}
          {/* {products.filter(filtrarProductos).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAuthenticated={isAuthenticated}
            />
          ))} */}

          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setModalCarrito={setModalCarrito}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      </div>
      {modalCarrito && (
        <ModalCarrito
          modalCarrito={modalCarrito}
          setModalCarrito={setModalCarrito}
        />
      )}
    </div>
  );
};

export default Products;
