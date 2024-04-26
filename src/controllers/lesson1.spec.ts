import { Request, Response } from 'express';
import { createRequest, createResponse } from 'node-mocks-http';
import { spencerRoute } from './lesson1';

describe('spencerRoute Handler', () => {
    let req: Request, res: Response;

    beforeEach(() => {
        req = createRequest();
        res = createResponse();
    });

    it('should send "Spencer is cool"', () => {
        res.send = jest.fn(res.send);
        spencerRoute(req, res);
        expect(res.send).toHaveBeenCalledWith('Spencer is cool');
        expect(res.statusCode).toBe(200);
    });
});