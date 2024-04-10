import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import { useSelector } from "react-redux";

const ShoppingCartPage = () => {
  const carrito = useSelector((state) => state.carrito);
  const [subtotal, setSubtotal] = useState(0);
  const [costoEnvio, setCostoEnvio] = useState(null);

  useEffect(() => {
    const calcularSubtotal = () => {
      const total = carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
      setSubtotal(total.toFixed(2));
    };

    calcularSubtotal();
  }, [carrito]);

  const handleCostoEnvio = (e) => {
    setCostoEnvio(parseFloat(e.target.value));
  };

  const total = costoEnvio ? (parseFloat(subtotal) + parseFloat(costoEnvio)).toFixed(2) : parseFloat(subtotal);

  return (
    <>
     
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">Mi Carrito</h2>
            <ShoppingCart items={carrito} />
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$ {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>{costoEnvio >=0 ? "Envío" : "Recogida"}</span>
                <span>{costoEnvio ? `$ ${costoEnvio.toFixed(2)}` : " GRATIS"}</span>
              </div>
              
              <select
                name="envio"
                onChange={handleCostoEnvio}
                className="border rounded-md py-1 px-2 focus:outline-none"
              >
                <option value="">Selecciona una opción de envío</option>
                <option value="10">Barranco</option>
                <option value="5">San Isidro</option>
                <option value="5">Breña</option>
                <option value="10">Callao</option>
                <option value="0">Ventanilla</option>
                <option value="0">San Miguel</option>
              </select>
              <div className="flex justify-between text-xl">
                <span>Total</span>
                <span>$ {total}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none">
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default ShoppingCartPage;
