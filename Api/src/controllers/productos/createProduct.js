import { Sequelize } from "sequelize";
import {
  Producto,
  CategoriaProducto,
  Marca,
  Inventario,
  InventarioProducto,
} from "../../db.js";

const createProducto = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      cantidadEnStock,
      imagen,
      tipoMascota,
      CategoriaProductoNombre,
      MarcaNombre,
      inventarios,
    } = req.body;

    // Verificar si ya existe un producto con el mismo nombre
    const productoExistente = await Producto.findOne({ where: { nombre } });
    if (productoExistente) {
      return res
        .status(400)
        .json({ error: "Ya existe un producto con este nombre." });
    }

    // Validar que la cantidad total en stock sea igual a la suma de las cantidades en los inventarios
    const cantidadTotal = inventarios.reduce(
      (total, inventario) => total + inventario.cantidad,
      0
    );
    if (cantidadTotal !== cantidadEnStock) {
      return res.status(400).json({
        error:
          "La cantidad total en stock no coincide con la suma de las cantidades en los inventarios.",
      });
    }

    // Buscar la categoría del producto por su nombre
    const categoriaProducto = await CategoriaProducto.findOne({
      where: { nombre: CategoriaProductoNombre },
    });
    if (!categoriaProducto) {
      return res.status(404).json({
        error: "No se encontró la categoría del producto correspondiente.",
      });
    }

    // Buscar la marca por su nombre
    const marca = await Marca.findOne({ where: { nombre: MarcaNombre } });
    if (!marca) {
      return res
        .status(404)
        .json({ error: "No se encontró la marca correspondiente." });
    }

    // Crear el producto asociado a las categorías y marca encontradas
    const producto = await Producto.create({
      nombre,
      descripcion,
      precio,
      cantidadEnStock,
      imagen,
      tipoMascota,
      CategoriaProductoId: categoriaProducto.id,
      MarcaId: marca.id
    });

    // Obtener los objetos de inventario
const inventarioObjs = await Promise.all(
    inventarios.map(async (inventario) => {
      const inventarioObj = await Inventario.findByPk(inventario.id);
      if (!inventarioObj) {
        throw new Error(`No se encontró el inventario con el ID ${inventario.id}`);
      }
      return {
        inventario: inventarioObj,
        cantidad: inventario.cantidad // Agregar la cantidad al objeto de inventario
      };
    })
  );
  
  // Asociar todos los inventarios al producto con las cantidades correspondientes
  await Promise.all(
    inventarioObjs.map(async ({ inventario, cantidad }) => {
      await producto.addInventario(inventario, { through: { cantidad } });
    })
  );
   

    res.status(201).json({ producto });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createProducto;
