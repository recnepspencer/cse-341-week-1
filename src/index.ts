import express, { Express } from 'express';
import routes from './routes';
 
const app = express();

const port: number = 3000;

app.use('/', routes);

app.listen(process.env.PORT || port);
console.log(`Server running at http://localhost:${port}`);
