import { Router } from "express";
import getProductos from "../controllers/productos/getProductos.js";
import createProducto from "../controllers/productos/createProduct.js";


const ProductoRoutes = Router();

ProductoRoutes.get('/getproductos' , getProductos)
ProductoRoutes.post('/createproducto' , createProducto)

export default ProductoRoutes;
