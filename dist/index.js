"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuracion de archivo .env
dotenv_1.default.config();
// Crear Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Definir la primera ruta de la App
app.get("/hello", (req, res) => {
    // Sent Hello World
    res.send("Welcome to GET route: Hello!");
});
// Ejecutar la App y escuchar las peticiones a un puerto concreto
app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map