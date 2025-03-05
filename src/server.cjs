const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let cotizaciones = [
    { id: 1, cliente: "Empresa A", monto: 5000, fecha: "2024-02-15" },
];

io.on("connection", (socket) => {
    console.log("Usuario conectado");

    socket.on("nueva-cotizacion", (data) => {
        cotizaciones.push(data);
        io.emit("actualizar-cotizaciones", cotizaciones);  // Emitir las cotizaciones actualizadas a todos
    });

    socket.on("disconnect", () => console.log("Usuario desconectado"));
});

server.listen(5001, () => console.log("Servidor corriendo en el puerto 5001"));