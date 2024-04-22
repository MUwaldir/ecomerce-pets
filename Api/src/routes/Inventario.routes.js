import { Router } from "express";
import getInventarios from "../controllers/Inventarios/getInventarios.js";
import createInventario from "../controllers/Inventarios/createInventario.js";

const InventarioRoutes = Router();

InventarioRoutes.get('/getinventarios', getInventarios)
InventarioRoutes.post('/createinventario', createInventario)

export default InventarioRoutes;