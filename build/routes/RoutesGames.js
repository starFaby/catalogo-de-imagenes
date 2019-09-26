"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerGames_1 = __importDefault(require("../controller/ControllerGames"));
class RoutesGames {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ControllerGames_1.default.list);
        this.router.post('/', ControllerGames_1.default.create);
        this.router.delete('/:id', ControllerGames_1.default.delete);
    }
}
const routesGames = new RoutesGames();
exports.default = routesGames.router;
