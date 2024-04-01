import React from 'react';

const ProductosDestacados = ({ products }) => {
  return (
    <div className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosDestacados;
