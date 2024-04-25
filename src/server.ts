const express = require("express");
const app = express();

const port: number = 3000;

app.use('/', require('./src/routes'))

app.listen(process.env.PORT || port);
console.log(`Server running at http://localhost:${port}`);
