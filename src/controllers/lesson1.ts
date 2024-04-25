import { Request, Response } from "express";

export const spencerRoute = (req: Request, res: Response):void => {
    res.send('Spencer is cool');
};

export const estherRoute = (req: Request, res: Response):void => {
    res.send('Esther is the most beautiful wife');
}

export const brotherBirchRoute = (req: Request, res: Response):void => {
    res.send('Brother Birch is cool');
};

export const jesusRoute = (req: Request, res: Response):void => {
    res.send('Jesus is king');
};

