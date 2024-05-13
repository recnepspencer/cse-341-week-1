import express, { Express } from 'express';
import routes from './routes';
import connectDatabase from './config/database';
import dotenv from 'dotenv';
import { setupSwagger } from './config/swagger';

dotenv.config();

const app: Express = express();
setupSwagger(app);

app.use(express.json());

app.use('/', routes);

export default app;