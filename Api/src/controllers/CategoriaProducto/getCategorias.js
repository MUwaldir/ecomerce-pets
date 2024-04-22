import { CategoriaProducto } from "../../db.js";

const getCategorias = async (req,res,next) => {
    try {
        const categorias  = await CategoriaProducto.findAll()
        res.status(201).json({ categorias });
        
    } catch (error) {
        return res.status(400).json({ error: 'Error al traer las catgeorias' });
    }

}

export default getCategorias;