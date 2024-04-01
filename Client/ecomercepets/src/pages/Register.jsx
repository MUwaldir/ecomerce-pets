// Register.js
import React from 'react';

const Register = () => {
  const handleRegister = () => {
    // Lógica para registrar al usuario
    console.log('Usuario registrado');
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registro</h2>
        </div>
        <form className="mt-8 space-y-6">
          {/* Campos de entrada para el correo electrónico, contraseña y confirmación de contraseña */}
          <input type="email" placeholder="Correo electrónico" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          <input type="password" placeholder="Contraseña" className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          <input type="password" placeholder="Confirmar contraseña" className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          {/* Botón para enviar el formulario */}
          <button onClick={handleRegister} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
