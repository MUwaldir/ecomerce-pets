import React from 'react';
import {useDispatch} from "react-redux";
import { eliminaProductoCarrito } from '../redux/actions/actions';
const ShoppingCart = ({ items }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt="" className="w-16 h-16 rounded-md object-cover" />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            <button onClick={() => dispatch(eliminaProductoCarrito(item.id))} className="text-red-500 hover:text-red-700 focus:outline-none">
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
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-6">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none">
          Pagar
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
