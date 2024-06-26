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
    },
    imagen: {
      type: DataTypes.STRING, // Tipo de dato para la URL de la imagen
      allowNull: true // Permitir que la imagen sea opcional
    },
    prueba:{
        type: DataTypes.STRING, // Tipo de dato para la URL de la imagen
        allowNull: true // Permitir que la imagen sea opcional
    }
  });
  return Marca;
};

export default MarcaModel;
