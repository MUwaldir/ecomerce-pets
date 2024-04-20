import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const MarcaModel = (sequelize) => {
  const Marca = sequelize.define('Marca', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4()
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Marca;
};

export default MarcaModel;
