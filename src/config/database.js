import { Sequelize } from "sequelize";
//5- creamos la conexion a la base de datos db_task
// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize("db_task", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//5.1 exportamos la conexion

export const stardDb = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); //cada vez que se guarde se eliminen los datos
    // await sequelize.sync({ force: true }); //cada vez que se guarde se eliminen los datos
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
