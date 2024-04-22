import { Router } from "express";
import getDescuento from "../controllers/Descuentos/getDescuento.js";
import createDescuento from "../controllers/Descuentos/createDescuento.js";
const DescuentoRoutes =Router();

DescuentoRoutes.get('/getdescuento', getDescuento);
DescuentoRoutes.post('/createdescuento', createDescuento);




export default DescuentoRoutes;