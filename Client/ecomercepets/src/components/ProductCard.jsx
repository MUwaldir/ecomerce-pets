import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const ProductCard = ({ product, isAuthenticated }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      // Lógica para agregar al carrito
      console.log('Producto agregado al carrito');
    } else {
      // Mostrar el modal si el usuario no está autenticado
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {/* Enlace al detalle del producto */}
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>

      <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md">Agregar al Carrito</button>

      {/* Modal para mostrar el mensaje */}
      {showModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-lg font-semibold mb-2">Inicia sesión para continuar</h2>
          <p className="text-gray-600">Debes iniciar sesión para agregar productos al carrito.</p>
          <div className="flex justify-end mt-4">
            <button onClick={handleModalClose} className="bg-blue-500 text-white py-2 px-4 mr-2 rounded-md">Aceptar</button>
            <button onClick={handleModalClose} className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md">Cerrar</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductCard;
