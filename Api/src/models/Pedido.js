import { DataTypes } from 'sequelize';

const PedidoModel = (sequelize) => {

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fechaPedido: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estadoPedido: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
return Pedido;
}

export default PedidoModel;
