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
        if(gamesOne.length>0){
            return res.json(gamesOne[0]);
        }
        res.status(404).json({message:'the ga'})
    }
}
const gamesController = new GamesController();
export default gamesController;
