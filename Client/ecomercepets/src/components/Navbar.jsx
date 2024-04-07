import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/solid"; // Importa los iconos de teléfono y carrito de compras
import { FaWhatsapp, FaFacebook, FaInstagram, FaUser } from "react-icons/fa"; // Importa los iconos de WhatsApp, Facebook e Instagram
import { SearchIcon } from "@heroicons/react/outline";
const Navbar = () => {
  const [showOptionsGatos, setShowOptionsGatos] = useState(false);
  const [showOptionsPerros, setShowOptionsPerros] = useState(false);
  const [showOptionsMas, setShowOptionsMas] = useState(false);

  const marcasProductosPerros = [
    { id: 1, nombre: "Royal Canin" },
    { id: 2, nombre: "Pedigree" },
    { id: 3, nombre: "Hills Science Diet" },
    { id: 4, nombre: "Purina" },
    { id: 5, nombre: "Eukanuba" },
    { id: 6, nombre: "Acana" },
    { id: 7, nombre: "Orijen" },
    { id: 8, nombre: "Merrick" },
    { id: 9, nombre: "Blue Buffalo" },
    { id: 10, nombre: "Wellness" },
  ];

  return (
    <nav className=" text-white h-36">
      <div className=" mx-auto">
        <div className="flex bg-green-500 items-center justify-center h-20">
          <div className="hidden md:flex items-center mx-4 ">
            <p className="text-sm md:text-base mx-2">DELIVERY GRATIS</p>
            <p className=" border-2 rounded-2xl px-2 font-semibold border-white">
              ORDENA HOY
            </p>
          </div>
          <div className="flex items-center mx-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Buscar"
                className="bg-gray-200 text-black pl-10 py-1 pr-4 rounded-md focus:outline-none focus:bg-white focus:border-gray-300"
              />
            </div>
            <button className="bg-orange-400 px-4 py-1 rounded-md">
              Buscar
            </button>
          </div>

          <div className="flex mx-4">
            <div className="bg-orange-400 px-2 py-1 rounded-md ml-4 flex items-center">
              {/* Icono de watsap */}
              <FaWhatsapp className="h-6 w-6 mr-2" />
              <span>9999999999</span>
            </div>
            <div className="flex ml-4 items-center">
              <FaFacebook className="h-6 w-6 mr-2" />
              <FaInstagram className="h-6 w-6 mr-2" />
            </div>
            {/* Aquí puedes agregar los botones de Instagram y Facebook */}
          </div>
        </div>
        <div className="menu flex justify-around items-center text-gray-500 h-16 ">
          <Link to="/" className="text-lg font-bold ">
            PETSTORE
          </Link>

          <ul className="md:flex space-x-6 items-center">
            <li>
              <Link to="/products" className="text-sm md:text-base">
                Tienda
              </Link>
            </li>
            <li
              className="relative bg-white px-4  "
              onMouseEnter={() => setShowOptionsPerros(true)}
              onMouseLeave={() => setShowOptionsPerros(false)}
            >
              <Link to="/perro" className="text-sm md:text-base">
                Perro
              </Link>
              {showOptionsPerros && (
                <ul className="opciones absolute bg-white -right-1 top-6 z-40 w-40 -mr-10">
                  {marcasProductosPerros.map((producto) => (
                    <li
                      className="px-2 py-1  hover:text-black"
                      key={producto.id}
                    >
                      <Link to={`./perros/${producto.nombre.toLowerCase()}`}>
                        {producto.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="relative bg-white px-4  "
              onMouseEnter={() => setShowOptionsGatos(true)}
              onMouseLeave={() => setShowOptionsGatos(false)}
            >
              <Link to="/gato" className="text-sm md:text-base">
                Gato
              </Link>
              {showOptionsGatos && (
                <ul className="opciones absolute bg-white -right-1 top-6 z-40 w-40 -mr-10">
                  {marcasProductosPerros.map((producto) => (
                    <li
                      className="px-2 py-1 hover:text-black"
                      key={producto.id}
                    >
                      <Link to={`./gato/${producto.nombre.toLowerCase()}`}>
                        {producto.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/conejo" className="text-sm md:text-base">
                Conejo
              </Link>
            </li>
            <li
              className="relative bg-white px-4 "
              onMouseEnter={() => setShowOptionsMas(true)}
              onMouseLeave={() => setShowOptionsMas(false)}
            >
              <Link to="/otros" className="text-sm md:text-base">
                Más
              </Link>
              {showOptionsMas && (
                <ul className="opciones absolute bg-white -right-1 top-6 z-40 w-40 -mr-10">
                  {marcasProductosPerros.map((producto) => (
                    <li
                      className="px-2 py-1  hover:text-black"
                      key={producto.id}
                    >
                      <Link to={`./otros/${producto.nombre.toLowerCase()}`}>
                        {producto.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/promociones" className="text-sm md:text-base">
                Promociones
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-sm md:text-base">
                Cotactános
              </Link>
            </li>
            <li>
              <Link to="/outlet" className="text-sm md:text-base">
                Outlet
              </Link>
            </li>
          </ul>
          <div className="register flex space-x-2 items-center">
            {/* icono de session */}
            <FaUser />
            <Link to="./session">Inicias Session</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
