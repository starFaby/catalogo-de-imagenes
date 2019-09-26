import {Router} from 'express';
import  gamesController  from "../controller/ControllerGames";
class RoutesGames{
    public router:Router;
    constructor(){
        this.router=Router();
        this.config();
    }
    config(){
        this.router.get('/',g)
    }
}
const routesGames = new RoutesGames();
export default routesGames.router;

