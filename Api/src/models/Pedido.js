import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
const PedidoModel = (sequelize) => {

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4()

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
