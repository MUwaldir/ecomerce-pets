import { DataTypes } from 'sequelize';

const UsuarioModel = (sequelize) => {

// class Course extends Model {}
const Usuario = sequelize.define(
  "Usuario",
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: false,
  }
);
return Usuario;
}

export default UsuarioModel;








