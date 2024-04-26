import request from 'supertest';
import app from '..';

describe('API Routes', () => {
    test('GET /spencer should return "Spencer is cool"', async () => {
        const response = await request(app).get('/spencer');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Spencer is cool');
    });

    test('GET /esther should return "Esther is the most beautiful wife"', async () => {
        const response = await request(app).get('/esther');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Esther is the most beautiful wife');
    });

    test('GET /brother-birch should return "Brother Birch is cool"', async () => {
        const response = await request(app).get('/brother-birch');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Brother Birch is cool');
    });

    test('GET /jesus should return "Jesus is king"', async () => {
        const response = await request(app).get('/jesus');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Jesus is king');
    });
});