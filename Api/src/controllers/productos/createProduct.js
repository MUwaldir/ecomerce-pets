import { CategoriaProducto, Producto } from "../../db.js";



export async function createProduct(req, res) {
    try {
        // Obtener los datos del producto y su categoría del cuerpo de la solicitud
        const { nombre, descripcion, precio, cantidadEnStock, imagen, categoria } = req.body;

        // Obtener la categoría del producto o crearla si no existe
        let categoriaProducto = await CategoriaProducto.findOne({ where: { nombre: categoria } });
        if (!categoriaProducto) {
            categoriaProducto = await CategoriaProducto.create({ nombre: categoria, descripcion: 'Descripción por defecto' });
        }

        // Crear un nuevo producto con los datos proporcionados
        const nuevoProducto = await Producto.create({
            nombre,
            descripcion,
            precio,
            cantidadEnStock,
            imagen
        });

        // Asignar la categoría al producto
        await nuevoProducto.setCategoriaProducto(categoriaProducto);

        // Guardar el producto en la base de datos
        res.status(201).json({ message: 'Producto creado con éxito', producto: nuevoProducto });
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ message: 'Hubo un error al crear el producto' });
    }
}
