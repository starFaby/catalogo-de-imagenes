"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databse_1 = __importDefault(require("../databse"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield databse_1.default.query('select * from game');
            res.json(games);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const gamesOne = yield databse_1.default.query('select * from game where id=?', [id]);
            if (gamesOne.length > 0) {
                return res.json(gamesOne[0]);
            }
            res.status(404).json({ message: 'the game no exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databse_1.default.query("INSERT INTO game set ?", [req.body]);
            console.log(req.body);
            res.json({ text: "create the game" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databse_1.default.query('update game set ? where id=?', [req.body, id]);
            res.json({ message: 'juego actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databse_1.default.query("delete from game where id=?", [id]);
            res.json({ message: "JUegos eliminado" });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
