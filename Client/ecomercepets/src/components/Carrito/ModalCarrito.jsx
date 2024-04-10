import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addCantidadCarrito,
  eliminaProductoCarrito,
  reduceCantidadCarrito,
  setCarrito,
} from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import "./ModalCarrito.css";
const ModalCarrito = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const [modalVisible, setModalVisible] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const carritoRef = useRef(null);
  const closeModal = () => {
    setModalVisible(false);
  };

  // Cargar el carrito desde localStorage al cargar la aplicación

  useEffect(() => {
    const handleCloseModal = (event) => {
      const isInsideCarrito =
        carritoRef.current && carritoRef.current.contains(event.target);
      const isEliminarProducto =
        event.target.classList.contains("eliminar-producto");
        console.log(modalVisible,!isInsideCarrito,!isEliminarProducto)
      if (modalVisible && !isInsideCarrito && !isEliminarProducto) {
        closeModal();
      }
    };

    if (modalVisible) {
      document.addEventListener("click", handleCloseModal);
    }

    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, [modalVisible]);

  useEffect(() => {
    setModalVisible(true);
    const valorTotal = carrito
      .reduce((total, producto) => {
        return total + producto.price * producto.cantidad;
      }, 0)
      .toFixed(2);
    setSubtotal(valorTotal);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleEliminarProducto = (id) => {
    dispatch(eliminaProductoCarrito(id));
  };

  return (
    <div
      className={`fixed  top-0 right-0 h-screen w-full bg-gray-800 bg-opacity-50 flex justify-end transition-opacity duration-500 ${
        modalVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-1/4 h-screen  bg-white rounded-lg px-4 py-8 shadow-lg relative transform transition-transform duration-200 ${
          modalVisible ? "" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={closeModal}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          className="flex flex-col justify-around h-full eliminar-producto"
          ref={carritoRef}
        >
          <h2 className="text-2xl  top-4 font-bold mb-4 text-gray-800">
            Tu Carrito de Compras
          </h2>
          <div
            className="top-40 overflow-y-auto productos_carrito "
            
          >
            {carrito.length > 0 ? (
              carrito.map((producto) => (
                <div
                  key={producto.id}
                  className="flex items-center justify-center mb-4"
                >
                  <div className="flex items-center justify-center w-1/3">
                    <img
                      src={producto.image}
                      alt={producto.name}
                      className="w-16 h-16 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-2/3 px-4">
                    <p className="text-gray-800 text-lg">{producto.name}</p>
                    <p className="text-gray-600">
                      Precio: ${producto.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        disabled={producto.cantidad === 1}
                        onClick={() =>
                          dispatch(reduceCantidadCarrito(producto.id))
                        }
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                      >
                        -
                      </button>
                      <p className="mx-2">{producto.cantidad}</p>
                      <button
                        disabled={producto.cantidad >= 10}
                        onClick={() =>
                          dispatch(addCantidadCarrito(producto.id))
                        }
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEliminarProducto(producto.id)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none ml-auto "
                  >
                    <svg
                      className="w-6 h-6 text-red-500 hover:bg-slate-200 eliminar-producto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-800">No hay productos en tu carrito</p>
            )}
          </div>

          <div className="subtotal  bottom-0 bg-white w-64 p-2 text-gray-600">
            <p className="text-2xl">Subtotal</p>
            <p className="text-2xl">$ {subtotal} </p>
            <div className="rounded bg-orange-500  p-2 text-center text-white mt-2">
              <Link to="/cart" className="">
                Ver Carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCarrito;
