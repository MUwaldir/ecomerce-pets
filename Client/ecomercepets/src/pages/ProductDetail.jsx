import React, { useState } from 'react';
import accesorios from '../utils/accesorios';
import Modal from '../components/Modal';
import { useNavigate, useParams } from 'react-router-dom';
const ProductDetail = ({isAuthenticated }) => {
    const navigate = useNavigate()
    const { id } = useParams(); // Obtiene el id del producto de los parámetros de la URL
    const [showModal, setShowModal] = useState(false);
    const product = accesorios.find(product => product.id === parseInt(id)); // Encuentra el producto con el id correspondiente
    
    if (!product) {
      return <div>Producto no encontrado</div>; // Maneja el caso donde el producto no se encuentra
    }
    const handleAddToCart = () => {
        if (isAuthenticated) {
          // Lógica para agregar al carrito para usuarios autenticados
          console.log('Producto agregado al carrito');
          // Aquí podrías redirigir al usuario al carrito
        } else {
          // Mostrar el modal si el usuario no está autenticado
          setShowModal(true);
        }
      };
    
      const handleModalAccept = () => {
        setShowModal(false);
        navigate('/login')
        // Redireccionar al usuario al login
        // Aquí deberías usar la lógica para redirigir al usuario al login
      };
    
      const handleModalClose = () => {
        setShowModal(false);
      };
  return (
    <div className='flex-grow'>
      
      <div className="container mx-auto mt-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img src={product.image} alt={product.name} className="w-full  object-cover" style={{height:"400px"}} />
          <div>
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md">Agregar al Carrito</button>
          </div>
        </div>
      </div>
        {/* Modal para mostrar el mensaje */}
        {showModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-lg font-semibold mb-2">Inicia sesión para continuar</h2>
          <p className="text-gray-600">Debes iniciar sesión para agregar productos al carrito.</p>
          <div className="flex justify-end mt-4">
            <button onClick={handleModalAccept} className="bg-blue-500 text-white py-2 px-4 mr-2 rounded-md">Aceptar</button>
            <button onClick={handleModalClose} className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md">Cerrar</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductDetail;
