import { Router } from "express";
import {
  ctrlCreateTasks,
  ctrlDeleteTasks,
  ctrlGetTasks,
  ctrlUpdateTasks,
} from "../controllers/task.controllers.js";

import {
  createTaskSchema,
  editTaskSchema,
} from "../models/schemas/task.schema.js";
import { validator } from "../middlewares/validator.js";
import { ValidatorsImpl } from "express-validator/src/chain/validators-impl.js";
//3- Enrutador
const taskRouter = Router(); //De aca sacamos el router para el Crud

//endpoint para traer todas las tareas
taskRouter.get("/api/tasks", ctrlGetTasks);

//endpoint para crear una tarea
taskRouter.post("/api/tasks", createTaskSchema, validator, ctrlCreateTasks);

//endpoint para modificar una tarea
taskRouter.put("/api/tasks/:id", editTaskSchema, validator, ctrlUpdateTasks);

//endpoint para eliminar una tarea
taskRouter.delete("/api/tasks/:id", ctrlDeleteTasks);

//3.1 Exportamos la constante taskrouter

export { taskRouter };
