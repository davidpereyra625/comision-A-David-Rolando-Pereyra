//6- creamos el modelo
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
//recibimos dos parametros en el define
//1ro como queresmos que se llame la tabla y definir los atributos
export const TaskModel = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true, //nos crea la fecha en la que se creo el dato
  }
);
