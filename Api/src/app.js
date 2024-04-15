import express from "express";
import routes from "./routes/routes.js";
const app = express();
app.use(express.json());
app.use('/api', routes)
app.use("/", (req, res) => {
  res.send("Welcome to the express server");
});

export default app;