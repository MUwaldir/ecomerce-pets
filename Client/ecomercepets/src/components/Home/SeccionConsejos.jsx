import React from 'react';

const SeccionConsejos = ({ tips }) => {
  return (
    <div className="tips-section">
      <h2>Consejos para el Cuidado de Mascotas</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default SeccionConsejos;
