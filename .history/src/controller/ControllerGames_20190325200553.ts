import { Request, Response } from "express";
import pool from '../databse';
class GamesController{
    public async list(req:Request,res:Response): Promise<any>{
        const games = await pool.query('select * from game');
        res.json(games);
    }
    public a listOne(req:Request,res:Response):Promise<any>{

    }
}
const gamesController = new GamesController();
export default gamesController;
