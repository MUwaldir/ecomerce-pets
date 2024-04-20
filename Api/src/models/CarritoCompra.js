import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid para generar UUIDs

const CarritoCompraModel = (sequelize) => {
  const CarritoCompra = sequelize.define('CarritoCompra', {
    id: {
      type: DataTypes.UUID, // Cambia el tipo de dato a UUID
      primaryKey: true,
      defaultValue: () => uuidv4() // Asigna un valor UUID generado automáticamente al crear una nueva entrada
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return CarritoCompra;
};

export default CarritoCompraModel;
