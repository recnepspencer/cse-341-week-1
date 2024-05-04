import { Router } from 'express';
import { spencerRoute, estherRoute, brotherBirchRoute, jesusRoute } from '../controllers/lesson1';
import createRoutes from '../utils/createRoutes';
import * as contactController from '../controllers/ContactController'

const routes = Router();

routes.get("/", spencerRoute);
routes.get("/esther", estherRoute);
routes.get("/brother-birch", brotherBirchRoute);
routes.get("/jesus", jesusRoute);

routes.use('/contacts', createRoutes(contactController, 'contact'));


export default routes;