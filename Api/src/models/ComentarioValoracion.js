import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid para generar UUIDs
const ComentarioValoracionModel = (sequelize) => {

const ComentarioValoracion = sequelize.define('ComentarioValoracion', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4()

  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  valoracion: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
return ComentarioValoracion;
}

export default ComentarioValoracionModel;
