import {Router} from 'express';
import { gamesController } from "../";
class RoutesGames{
    public router:Router;
    constructor(){
        this.router=Router();
        this.config();
    }
    config(){
        this.router.get('/',)
    }
}
const routesGames = new RoutesGames();
export default routesGames.router;

