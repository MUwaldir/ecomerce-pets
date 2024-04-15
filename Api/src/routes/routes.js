import { Router } from "express";
import prueba from "../controllers/prueba.js";
import { createProduct } from "../controllers/productos/createProduct.js";


const routes =Router();

routes.get('/prueba', prueba )
routes.post('/create_product', createProduct)


export default routes;