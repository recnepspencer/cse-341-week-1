import express, { Express } from 'express';
import routes from './routes';
import connectDatabase from './config/database';
import dotenv from 'dotenv';
import { setupSwagger } from './config/swagger';
const cors = require('cors');
dotenv.config();

const app: Express = express();
app.use(cors());
setupSwagger(app);

app.use(express.json());

app.use('/', routes);

export default app;