"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const socketIo = require("socket.io");
class App {
    constructor() {
        this.PORT = 8100;
        this.routes();
        this.sockets();
        this.listen();
    }
    routes() {
        this.app = express();
        this.app.route("*").get((req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
    }
    sockets() {
        this.server = http_1.createServer(this.app);
        this.io = socketIo(this.server);
    }
    listen() {
        this.io.on('connection', (socket) => {
            console.log(socket.client)
            socket.on('chat message', (m) => {
                this.io.emit('chat message', m);
            });
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });
    }
}
exports.default = new App();
