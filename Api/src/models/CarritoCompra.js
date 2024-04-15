import { DataTypes } from 'sequelize';

const CarritoCompraModel = (sequelize) => {

const CarritoCompra = sequelize.define('CarritoCompra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
return CarritoCompra;
};

export default CarritoCompraModel;
