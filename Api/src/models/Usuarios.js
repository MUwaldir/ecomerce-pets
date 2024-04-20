import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const UsuarioModel = (sequelize) => {

// class Course extends Model {}
const Usuario = sequelize.define(
  "Usuario",
  {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuidv4()
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








