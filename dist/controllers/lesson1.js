"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jesusRoute = exports.brotherBirchRoute = exports.estherRoute = exports.spencerRoute = void 0;
const spencerRoute = (req, res) => {
    res.send('Spencer is cool');
};
exports.spencerRoute = spencerRoute;
const estherRoute = (req, res) => {
    res.send('Esther is the most beautiful wife');
};
exports.estherRoute = estherRoute;
const brotherBirchRoute = (req, res) => {
    res.send('Brother Birch is cool');
};
exports.brotherBirchRoute = brotherBirchRoute;
const jesusRoute = (req, res) => {
    res.send('Jesus is king');
};
exports.jesusRoute = jesusRoute;
