import { DataTypes } from 'sequelize';

const DetallePedidoModel = (sequelize) => {

const DetallePedido = sequelize.define('DetallePedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precioCompra: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }

});
return DetallePedido;
}

export default DetallePedidoModel;
