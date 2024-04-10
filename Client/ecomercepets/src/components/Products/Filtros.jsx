import React, { useState } from 'react';

const Filtros = ({ categorias, onCategoriaChange, onTipoAccesorioChange, onCostoChange, onAplicarFiltros }) => {
    const [costoSeleccionado, setCostoSeleccionado] = useState(0);

    const handleCostoChange = (costo) => {
        setCostoSeleccionado(costo);
        onCostoChange(costo);
    };

    const handleAplicarFiltros = () => {
        // Lógica para aplicar los filtros combinados
        onAplicarFiltros();
    };

    return (
        <div className="bg-white p-6 rounded-md shadow-md transition duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-4">Filtros</h2>
            {/* Filtro por categoría */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Categoría</h3>
                <select
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={(e) => onCategoriaChange(e.target.value)}
                >
                    <option value="">Todas</option>
                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                    ))}
                </select>
            </div>
            {/* Filtro por tipo de accesorio */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Tipo de Accesorio</h3>
                <select
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={(e) => onTipoAccesorioChange(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="otro">Otros</option>
                </select>
            </div>
            {/* Filtro por costo */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Costo</h3>
                <span className="text-sm">Mínimo: $0</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={costoSeleccionado}
                    onChange={(e) => handleCostoChange(e.target.value)}
                    className="w-full mt-2 appearance-none bg-gray-200 h-1 rounded-full outline-none"
                />
                <span className="text-sm">Máximo: $100</span>
                {/* Mostrar el valor actual del rango de precios */}
                <p className="text-sm mt-2">Valor actual: ${costoSeleccionado}</p>
            </div>
            {/* Botón para aplicar filtros */}
            {/* <button
                onClick={handleAplicarFiltros}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Aplicar filtros
            </button> */}
        </div>
    );
}

export default Filtros;
