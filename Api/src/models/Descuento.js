import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const DescuentoModel = (sequelize) => {
  const Descuento = sequelize.define('Descuento', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4()
    },
    porcentaje: {
      type: DataTypes.DECIMAL(5, 2), // Porcentaje del descuento
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Descuento;
};

export default DescuentoModel;
