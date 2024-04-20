import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid para generar UUIDs

const DetallePedidoModel = (sequelize) => {

const DetallePedido = sequelize.define('DetallePedido', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4()

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
