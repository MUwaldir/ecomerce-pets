import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
  // Crear un array con el número de páginas
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="pagination flex">
          {/* Botón de página anterior */}
          <li className={`page-item mx-1 ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link flex items-center"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaAngleLeft className="mr-1" /> Anterior
            </button>
          </li>
          {/* Botones de páginas */}
          {pages.map((page) => (
            <li key={page} className={`page-item mx-1 ${currentPage === page ? 'active' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
          {/* Botón de página siguiente */}
          <li className={`page-item mx-1 ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link flex items-center"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente <FaAngleRight className="ml-1" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginacion;
