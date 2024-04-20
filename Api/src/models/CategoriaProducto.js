import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid para generar UUIDs


const CategoriaProductoModel = (sequelize) => {
  const CategoriaProducto = sequelize.define('CategoriaProducto', {
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
return CategoriaProducto;
};

export default CategoriaProductoModel;

