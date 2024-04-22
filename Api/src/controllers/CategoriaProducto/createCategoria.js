import { CategoriaProducto } from "../../db.js";


const createCategoria = async (req,res,next) => {
    try {
        // Obtener los datos del body
        const { nombre, descripcion } = req.body;
    
        // Verificar si la categoría de producto ya existe
        const categoriaExistente = await CategoriaProducto.findOne({ where: { nombre } });
        if (categoriaExistente) {
          return res.status(400).json({ error: 'La categoría de producto ya existe' });
        }
    
        // Crear la categoría de producto en la base de datos
        const categoriaProducto = await CategoriaProducto.create({
          nombre,
          descripcion
        });
    
        // Enviar una respuesta con la categoría de producto creada
        res.status(201).json({ categoriaProducto });
      } catch (error) {
        // Enviar un mensaje de error si ocurre algún problema
        res.status(400).json({ error: error.message });
      }
};

export default createCategoria;