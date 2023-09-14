<div align="center">

# comision-21646-A-Rolando-David-Pereyra

#### Proyecto Integrador Final

El proyecto final consiste en un Foro Personalizado en entorno individual y aislado, para crear y compartir publicaciones de temas variados en una página web personal.
Utilizando tecnologías de programación web, como Node.js, EJS, MySQL y Sequelize.
Implementando Bootstrap para un diseño responsivo y más atractivo.

## Cada publicación debe incluir:

1. Título descriptivo.
2. Contenido informativo.
3. Link de una imagen relacionada con el contenido.
4. Fecha de creación.

## Ejecución:

Para ejecutarlo "npm run dev" y luego en el navegador desde [Servidor local](http://localhost:3000)

Crear la base de datos "db_task" en el servidor MySql
Crear una tabla con el nombre tasks y sus campos deben ser
id -> llave primaria
title -> varchar(255)
description -> varchar(255)
poster -> varchar(255)
Implementar en la carpeta models/Tasks.js timestamps: true para que se ejecute la fecha de creacion y actualizacion de la fila creada.

## Instalación de Dependencias:

Instala las dependencias necesarias para el proyecto. Ejecuta los siguientes comandos:

npm install express ejs sequelize mysql2 dotenv
npm install --save-dev nodemon

</div>
