import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const InventarioModel = (sequelize) => {
  const Inventario = sequelize.define('Inventario', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4()
    },

    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Inventario;
};

export default InventarioModel;
