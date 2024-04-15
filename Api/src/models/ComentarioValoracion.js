import { DataTypes } from 'sequelize';

const ComentarioValoracionModel = (sequelize) => {

const ComentarioValoracion = sequelize.define('ComentarioValoracion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
