import express, { Express } from 'express';
import routes from './routes';
import dotenv from 'dotenv';

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const app: Express = express();

app.use('/', routes);

export default app;