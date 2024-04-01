import React from 'react';

const ShoppingCart = ({ items }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md">Pagar</button>
    </div>
  );
}

export default ShoppingCart;
