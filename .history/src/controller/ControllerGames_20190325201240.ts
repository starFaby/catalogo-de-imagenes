import { Request, Response } from "express";
import pool from '../databse';
class GamesController{
    public async list(req:Request,res:Response): Promise<any>{
        const games = await pool.query('select * from game');
        res.json(games);
    }
    public async listOne(req:Request,res:Response):Promise<any>{
        const { id } =req.params;
        const gamesOne = await pool.query('select * from game where id=?',[id]);

    }
}
const gamesController = new GamesController();
export default gamesController;
