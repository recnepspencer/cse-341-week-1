import express, { Express } from 'express';
import routes from './routes';
import connectDatabase from './config/database';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());

app.use('/', routes);

export default app;