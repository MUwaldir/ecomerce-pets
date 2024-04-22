import { Marca } from "../../db.js";

const createMarca =async (req,res,next) => {
    const {nombre,descripcion,imagen,prueba} = req.body;
    try {
        // Verifica si ya existe una marca con el mismo nombre
        const marcaExistente = await Marca.findOne({ where: { nombre: nombre } });
        if (marcaExistente) {
        //   throw new Error('Ya existe una marca con este nombre');
          return res.status(404).json({message:'Ya existe una marca con este nombre'})
        }
        
        // Crea la marca en la base de datos
        const nuevaMarca = await Marca.create({
          nombre: nombre,
          descripcion: descripcion,
          imagen: imagen,
          prueba: prueba,
        });
        
        // Retorna la nueva marca creada
         // Devuelve una respuesta con el nuevo descuento creado
        return res.status(201).json({
          success: true,
          message: 'Marca creado correctamente',
          marca: nuevaMarca
        });
      } catch (error) {
        // Manejo de errores
        console.error('Error al crear la marca:', error);
        throw new Error('Error al crear la marca');
      }
};

export default createMarca;