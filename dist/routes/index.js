"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lesson1_1 = require("../controllers/lesson1");
const routes = (0, express_1.Router)();
routes.get("/spencer", lesson1_1.spencerRoute);
routes.get("/esther", lesson1_1.estherRoute);
routes.get("/brother-birch", lesson1_1.brotherBirchRoute);
routes.get("/jesus", lesson1_1.jesusRoute);
exports.default = routes;
