import { Router } from 'express';
import { spencerRoute, estherRoute, brotherBirchRoute, jesusRoute } from '../controllers/lesson1';


const routes = Router();

routes.get("/spencer", spencerRoute);
routes.get("/esther", estherRoute);
routes.get("/brother-birch", brotherBirchRoute);
routes.get("/jesus", jesusRoute);

export default routes;