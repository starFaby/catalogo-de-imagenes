"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ControllerGames {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('hola amor lynna');
        });
    }
}
const controllerGames = new ControllerGames();
exports.default = controllerGames.router;
