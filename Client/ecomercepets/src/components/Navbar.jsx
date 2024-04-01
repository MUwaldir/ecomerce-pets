import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white h-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-lg font-bold">PetStore</a>
          <ul className="flex space-x-4">
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/cart">Carrito</Link></li>
            <li><Link to="/login">Inicio Session</Link></li>

            <li><Link to="/register">Registro</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
