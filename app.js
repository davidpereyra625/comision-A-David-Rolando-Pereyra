import express from "express";
import { taskRouter } from "./src/routes/task.routes.js";
import { stardDb } from "./src/config/database.js";
import cors from "cors";

// 1-Arrancamos con el servidor

const app = express();
//middlewares
app.use(express.json());
app.use(cors());

const port = 3000; //1.1 creamos el puerto

app.get("/", (req, res) => {
  //1.3 visualizamos por pantalla con localhost:3000
  res.send("Todo Listo");
});
//2- creamos las rutas
app.use("/", taskRouter); //2.1 aqui se envia a la carpeta routes/task.routes.js

app.listen(port, () => {
  //1.2 escuchamos el port
  console.log(`server listening http://localhost:${port}`);
  stardDb();
});
