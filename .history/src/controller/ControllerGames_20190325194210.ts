import { Request, Response } from "express";
import pool from '../databse';
class GamesController{
    public list(req:Request,res:Response){
        const games = pool.query('select * from game');
    }
}
