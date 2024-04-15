import { DataTypes } from 'sequelize';

const CategoriaProductoModel = (sequelize) => {
  const CategoriaProducto = sequelize.define('CategoriaProducto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

