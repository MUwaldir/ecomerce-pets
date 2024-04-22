// En index.js (o cualquier nombre que desees)

import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

import CategoriaProductoModel from "./models/CategoriaProducto.js";
import ProductoModel from "./models/Producto.js";
import UsuarioModel from "./models/Usuarios.js";
import PedidoModel from "./models/Pedido.js";
import DetallePedidoModel from "./models/DetallePedido.js";
import ComentarioValoracionModel from "./models/ComentarioValoracion.js";
import CarritoCompraModel from "./models/CarritoCompra.js";
import InventarioModel from "./models/Inventario.js";
import MarcaModel from "./models/Marca.js";
import DescuentoModel from "./models/Descuento.js";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecomerce_pet`,
  {
    logging: false,
    native: false,
  }
);



// Definir relaciones
// Definir modelos
const Producto = ProductoModel(sequelize);
const CategoriaProducto = CategoriaProductoModel(sequelize);
const Usuario = UsuarioModel(sequelize);
const Pedido = PedidoModel(sequelize);
const DetallePedido = DetallePedidoModel(sequelize);
const ComentarioValoracion = ComentarioValoracionModel(sequelize);
const CarritoCompra = CarritoCompraModel(sequelize);
const Inventario = InventarioModel(sequelize);
const Marca = MarcaModel(sequelize);
const Descuento = DescuentoModel(sequelize);

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

// Producto.belongsTo(Inventario);
// Inventario.hasOne(Producto);

// Modelo de la tabla intermedia InventarioProducto
const InventarioProducto = sequelize.define('InventarioProducto', {
  cantidad: {
    type: DataTypes.INTEGER, // O el tipo de datos adecuado para la cantidad
    allowNull: false
  }
});

// Definir la relación muchos a muchos entre Producto e Inventario
Producto.belongsToMany(Inventario, {
  through: InventarioProducto,
  as: 'inventarios'
});

Inventario.belongsToMany(Producto, {
  through: InventarioProducto,
  as: 'productos'
});

Producto.belongsTo(Marca);
Marca.hasMany(Producto);

Producto.belongsToMany(Descuento, { through: "ProductoDescuento" });
Descuento.belongsToMany(Producto, { through: "ProductoDescuento" });

// Sincronizar modelos con la base de datos
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing models:", error);
  });

// Exportar los modelos y la conexión a la base de datos
export {
  Producto,
  CategoriaProducto,
  Usuario,
  Pedido,
  DetallePedido,
  Descuento,
  Marca,
  CarritoCompra,
  Inventario,
  ComentarioValoracion,
  sequelize,
  InventarioProducto
};
// export default sequelize;
