import { Request, Response } from "express";
import pool from '../databse';
class GamesController{
    public async list(req:Request,res:Response){
        const games = await pool.query('select * from game');
        res.json(games);
    }
}
