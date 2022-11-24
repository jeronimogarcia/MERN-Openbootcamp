import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuracion de archivo .env
dotenv.config();

// Crear Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Definir la primera ruta de la App
app.get("/hello", (req: Request, res: Response) => {
    // Sent Hello World
    res.send("Welcome to my API Restfull: Express + TS + Nodemon + Jest + Swagger + Mongoose");
  });

// Definir la primera ruta de la App
app.get("/hello", (req: Request, res: Response) => {
  // Sent Hello World
  res.send("Welcome to GET route: Hello!");
});

// Ejecutar la App y escuchar las peticiones a un puerto concreto
app.listen(port, () => {
  console.log(`Express Server: Running at http://localhost:${port}`);
});
