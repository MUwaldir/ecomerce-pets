import Usuario from "./Usuarios.js";
import Producto from "./Productos.js";
import Pedido from "./Pedido.js";
import DetallePedido from "./DetallePedido.js";
import CategoriaProducto from "./CategoriaProducto.js";
import ComentarioValoracion from "./ComentarioValoracion.js";
import CarritoCompra from "./CarritoCompra.js";

export  async function defineRelaciones() {
  Usuario.hasMany(Pedido);
  Pedido.belongsTo(Usuario);
  Producto.hasMany(DetallePedido);
  DetallePedido.belongsTo(Producto);
  Pedido.hasMany(DetallePedido);
  DetallePedido.belongsTo(Pedido);
  CategoriaProducto.hasMany(Producto);
  Producto.belongsTo(CategoriaProducto);
  Producto.hasMany(ComentarioValoracion);
  ComentarioValoracion.belongsTo(Producto);
  Usuario.hasMany(CarritoCompra);
  CarritoCompra.belongsTo(Usuario);
  Producto.hasMany(CarritoCompra);
  CarritoCompra.belongsTo(Producto);

  // Si hay más relaciones, se pueden agregar aquí
}
