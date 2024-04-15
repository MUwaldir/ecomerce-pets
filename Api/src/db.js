// En index.js (o cualquier nombre que desees)

import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

import CategoriaProductoModel from './models/CategoriaProducto.js';
import ProductoModel from './models/Producto.js';
import UsuarioModel from './models/Usuarios.js';
import PedidoModel from './models/Pedido.js';
import DetallePedidoModel from './models/DetallePedido.js';
import ComentarioValoracionModel from './models/ComentarioValoracion.js';
import CarritoCompraModel from './models/CarritoCompra.js';


dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecomerce_pet`,
  {
    logging: false,
    native: false,
  }
);


// const Producto = sequelize.define('Producto', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   descripcion: {
//     type: DataTypes.TEXT,
//     allowNull: false
//   },
//   precio: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false
//   },
//   cantidadEnStock: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   imagen: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// const CategoriaProducto = sequelize.define('CategoriaProducto', {
//   // Definir atributos de la categoría del producto si es necesario
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   descripcion: {
//     type: DataTypes.TEXT,
//     allowNull: false
//   }
// });

// Definir relaciones
// Definir modelos
const Producto = ProductoModel(sequelize);
const CategoriaProducto = CategoriaProductoModel(sequelize);
const Usuario = UsuarioModel(sequelize);
const Pedido = PedidoModel(sequelize);
const DetallePedido = DetallePedidoModel(sequelize);
const ComentarioValoracion = ComentarioValoracionModel(sequelize);
const CarritoCompra = CarritoCompraModel(sequelize);

Producto.belongsTo(CategoriaProducto);
CategoriaProducto.hasMany(Producto);
Usuario.hasMany(Pedido);
Pedido.belongsTo(Usuario);
Producto.hasMany(DetallePedido);
DetallePedido.belongsTo(Producto);
Pedido.hasMany(DetallePedido);
DetallePedido.belongsTo(Pedido);
Producto.hasMany(ComentarioValoracion);
ComentarioValoracion.belongsTo(Producto);
Usuario.hasMany(CarritoCompra);
CarritoCompra.belongsTo(Usuario);
Producto.hasMany(CarritoCompra);
CarritoCompra.belongsTo(Producto);

// Sincronizar modelos con la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });

// Exportar los modelos y la conexión a la base de datos
export { Producto, CategoriaProducto, sequelize };
// export default sequelize;

