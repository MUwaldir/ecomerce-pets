import { Router } from "express";
import getCategorias from "../controllers/CategoriaProducto/getCategorias.js";
import createCategoria from "../controllers/CategoriaProducto/createCategoria.js";

const CategoriaRoutes =Router();

CategoriaRoutes.get('/getcategorias', getCategorias );
CategoriaRoutes.post('/createcategoria',createCategoria);




export default CategoriaRoutes;