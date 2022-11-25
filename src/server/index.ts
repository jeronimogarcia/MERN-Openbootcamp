import express, { Response, Request, Express } from "express";

// Environment Variables
import dotenv from "dotenv";

// Security
import cors from "cors";
import helmet from "helmet";

// TODO HTTPS

// Root Router
import rootRouter from "../routes";

// Configuracion de archivo .env
dotenv.config();

// Crear Express APP
const server: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define SERVER to use '/API' and use rootRouter from 'index.ts' in routes
// From this point onover: http://localhost:8000/api/...
server.use("/api", rootRouter);

// TODO: Moongose Connection

// Security Config
server.use(helmet());
server.use(cors());

// Content Type Config
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

// Redirections Config
// http://localhost:8000/ ---> redirect to http://localhost:8000/api/
server.get("/", (req: Request, res: Response) => {
  res.redirect("/api");
});

export default server;
