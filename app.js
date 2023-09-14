import express from "express";
import path from "node:path";
import cors from "cors";
import morgan from "morgan"; //se puede ver en el servidor las peticiones
import helmet from "helmet";
import "dotenv/config";

import { taskRouter } from "./src/routes/task.routes.js";
import { startDb } from "./src/config/database.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middlewares
app.use(express.json());
app.use(cors()); //sirve para consumir los intercambios desde el servidor
app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  }) //arregla problemas de seguridad
);

app.use(express.static(path.join(__dirname, "src", "public")));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.use("/", taskRouter);

app.listen(port, () => {
  console.log(`servidor listo -> http://localhost:${port}`);
  startDb();
});
