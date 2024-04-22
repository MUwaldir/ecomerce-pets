import { Producto, CategoriaProducto, Marca, Inventario, InventarioProducto } from "../../db.js";

const getProductos = async (req, res) => {
  try {
    // Obtener todos los productos con sus asociaciones
    const productos = await Producto.findAll({
      include: [
        {
          model: CategoriaProducto,
          attributes: ['nombre', 'descripcion']
        },
        {
          model: Marca,
          attributes: ['nombre']
        },
        {
          model: Inventario,
          attributes: ['ubicacion'], // Incluir solo los atributos necesarios del inventario
          through: {
            model: InventarioProducto,
            attributes: ['cantidad']
           
        },
          as: 'inventarios'
        }
      ]
    });

    res.status(200).json({ productos });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default getProductos;
