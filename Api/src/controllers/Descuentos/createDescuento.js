import { Descuento } from "../../db.js";

const createDescuento = async (req,res,next) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const { porcentaje, descripcion } = req.body;
    
        // Verifica si ya existe un descuento con el mismo porcentaje
        const descuentoExistente = await Descuento.findOne({ where: { porcentaje } });
        if (descuentoExistente) {
          return res.status(400).json({
            success: false,
            message: 'Ya existe un descuento con el mismo porcentaje'
          });
        }
    
        // Crea el descuento en la base de datos
        const nuevoDescuento = await Descuento.create({
          porcentaje,
          descripcion
        });
    
        // Devuelve una respuesta con el nuevo descuento creado
        return res.status(201).json({
          success: true,
          message: 'Descuento creado correctamente',
          descuento: nuevoDescuento
        });
      } catch (error) {
        // Manejo de errores
        console.error('Error al crear el descuento:', error);
        return res.status(500).json({
          success: false,
          message: 'Error al crear el descuento'
        });
      }
};

export default createDescuento;