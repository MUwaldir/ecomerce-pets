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
    // if (carrito.length > 0) {
    //   localStorage.setItem("carrito", JSON.stringify(carrito));
    // }
    const valorTotal = carrito.reduce((total, producto) => {
      return total + producto.price * producto.cantidad;
    }, 0).toFixed(2);
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
        <div className="flex flex-col justify-around h-full" ref={carritoRef}>
          <h2 className="text-2xl  top-4 font-bold mb-4 text-gray-800">
            Tu Carrito de Compras
          </h2>
          <div
            className="top-40 overflow-y-auto"
            style={{ scrollbarWidth: "thin", scrollbarColor: "green" }}
          >
            {carrito.length > 0 ? (
              carrito.map((producto) => (
                <div
                  key={producto.id}
                  className="flex items-center justify-center mb-4"
                >
                  <img
                    src={producto.image}
                    alt=""
                    className="w-24 h-12 object-cover mr-4 rounded-lg"
                  />
                  <div className="w-3/4 mr-2 my-2 relative ">
                    <button
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 eliminar-producto"
                      onClick={() => handleEliminarProducto(producto.id)}
                    >
                      <svg
                        className="w-4 h-4 eliminar-producto"
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
                    <p className="text-gray-800">{producto.name}</p>
                    <p className="text-gray-600">Cantidad: {producto.price}</p>
                    <div className="flex justify-around border border-spacing-1 border-black">
                      <button
                        disabled={producto.cantidad === 1}
                        onClick={() =>
                          dispatch(reduceCantidadCarrito(producto.id))
                        }
                        className="hover:bg-slate-200 px-2"
                      >
                        -
                      </button>
                      <p>{producto.cantidad}</p>
                      <button
                        disabled={producto.cantidad >= 10}
                        onClick={() =>
                          dispatch(addCantidadCarrito(producto.id))
                        }
                        className="hover:bg-slate-200 px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
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
