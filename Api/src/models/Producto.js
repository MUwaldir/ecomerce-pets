import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const ProductoModel = (sequelize) => {
  const Producto = sequelize.define('Producto', {
    // Definición de atributos
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
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    cantidadEnStock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Nuevo atributo: Para indicar si es para perro, gato u otro
    tipoMascota: {
      type: DataTypes.ENUM('perro', 'gato', 'otro'),
      allowNull: false,
      defaultValue: 'otro' // Valor por defecto
    }
  });
  return Producto;
};

export default ProductoModel;
