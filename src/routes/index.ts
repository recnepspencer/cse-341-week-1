const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get("/spencer", lesson1Controller.spencerRoute);
routes.get("/esther", lesson1Controller.estherRoute);
routes.get("/brother-birch", lesson1Controller.brotherBirchRoute);
routes.get("/jesus", lesson1Controller.jesusRoute);

module.exports = routes;