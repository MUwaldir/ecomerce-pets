import express from "express";
import morgan from "morgan"
import DescuentoRoutes from "./routes/Descuento.routes.js";
import MarcaRoutes from "./routes/Marca.routes.js";
import InventarioRoutes from "./routes/Inventario.routes.js";
import ProductoRoutes from "./routes/Producto.routes.js";
import CategoriaRoutes from "./routes/Categoria.routes.js";
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', DescuentoRoutes)
app.use('/api', MarcaRoutes)
app.use('/api', InventarioRoutes)
app.use('/api', ProductoRoutes)
app.use('/api', CategoriaRoutes)





app.use("/", (req, res) => {
  res.send("Welcome to the express server");
});

export default app;