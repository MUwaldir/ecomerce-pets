import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';

const ShoppingCartPage = () => {
  // Lógica para obtener los productos en el carrito (puede venir de una API)
  const cartItems = [
    { id: 1, name: 'Juguete para Perro', price: 10.99 },
    { id: 2, name: 'Collar para Gato', price: 7.99 },
    // Agrega más elementos del carrito aquí
  ];

  return (
    <div className='flex-grow'>
    
      <div className="container mx-auto mt-8">
        <ShoppingCart items={cartItems} />
      </div>
     
    </div>
  );
}

export default ShoppingCartPage;
