import React from 'react';

const OfertasEspeciales = ({ offers }) => {
  return (
    <div className="special-offers">
      <h2>Ofertas Especiales</h2>
      <div className="offer-list">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <span>{offer.discount}% de descuento</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfertasEspeciales;
