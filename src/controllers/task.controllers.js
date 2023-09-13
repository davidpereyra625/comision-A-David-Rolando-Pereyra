import { TaskModel } from "../models/Tasks.js";

// 4-creamos una costante para cada uno
//4.1 controlador para traer todas las tareas
export const ctrlGetTasks = async (req, res) => {
  try {
    const task = await TaskModel.findAll(); //nos trae todos los datos de la bd
    if (!task) return res.status(404);
    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Server",
    });
  }
};

//4.2 controlador para crear todas las tareas
export const ctrlCreateTasks = async (req, res) => {
  console.log(req.body);
  try {
    const newTask = await TaskModel.create(req.body);
    return res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Server",
    });
  }
};

//4.3 controlador para actualizar todas las tareas
export const ctrlUpdateTasks = async (req, res) => {
  //RECUPERAMOS EL ID PRIMERO
  const { id } = req.params;
  try {
    const task = await TaskModel.findByPk(id);
    if (!task) {
      return res.status(404).json({
        message: "Tarea no encontrada",
      });
    }
    task.update(req.body);
    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Server",
    });
  }
};

//4.4 controlador para eliminar todas las tareas
export const ctrlDeleteTasks = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const taskDeleted = await TaskModel.destroy({
      where: {
        id: id,
      },
    });
    if (!taskDeleted) {
      return res.status(404).json({
        message: "tarea no encontrada",
      });
    }
    return res.status(200).json({
      message: "Tarea Eliminada",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Server",
    });
  }
};
