import { Inventario } from "../../db.js";

const createInventario = async (req, res) => {
  try {
    // Obtener los datos del body
    const {ubicacion } = req.body;

    // validar el inventraio
    // Verificar si ya existe un inventario con la misma ubicación
    const inventarioExistente = await Inventario.findOne({
      where: { ubicacion },
    });

    if (inventarioExistente) {
      // Si ya existe un inventario con la misma ubicación, enviar una respuesta de error
      return res
        .status(400)
        .json({ error: "Ya existe un inventario en esta ubicación." });
    }

    // Crear el inventario en la base de datos
    const inventario = await Inventario.create({
      ubicacion,
    });

    // Enviar una respuesta con el inventario creado
    res.status(201).json({ inventario });
  } catch (error) {
    // Enviar un mensaje de error si ocurre algún problema
    res.status(400).json({ error: error.message });
  }
};

export default createInventario;
