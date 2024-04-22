import { Router } from "express";

import getMarcas from "../controllers/Marcas/getMarcas.js";
import createMarca from "../controllers/Marcas/createMarca.js";
const MarcaRoutes = Router();

MarcaRoutes.get("/getmarcas", getMarcas);
MarcaRoutes.post("/createmarca", createMarca);

export default MarcaRoutes;
