import { Request, Response } from "express";

const spencerRoute = (req: Request, res: Response) => {
    res.send('Spencer is cool');
};

const estherRoute = (req: Request, res: Response) => {
    res.send('Esther is the most beautiful wife');
}

const brotherBirchRoute = (req: Request, res: Response) => {
    res.send('Brother Birch is cool');
};

const jesusRoute = (req: Request, res: Response) => {
    res.send('Jesus is king');
};

module.exports = {
    spencerRoute,
    estherRoute,
    brotherBirchRoute,
    jesusRoute
};