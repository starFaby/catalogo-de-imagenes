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
        res.status(404).json({message:'the game no exist'})
    }
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query("INSERT INTO game set ?", [req.body]);
        console.log(req.body);
        res.json({ text: "create the game" });
      }
      public async update(req: Request, res: Response):Promise<void>  {
        const {id} =req.params;
       await pool.query('update game set ? where id=?',[req.body,id]);
       res.json({message:'juego actualizado'});
      }
    
      public async delete(req: Request, res: Response):Promise<void>  {
        const { id } = req.params;
        await pool.query("delete from game where id=?", [id]);
        res.json({ message: "JUegos eliminado" });
      }
}
const gamesController = new GamesController();
export default gamesController;
