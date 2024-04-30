import request from 'supertest';
import { Request, Response } from 'express';
import app from '../server'
import * as contactController from '../controllers/ContactController';

describe('API Routes', () => {
    test('GET /spencer should return "Spencer is cool"', async () => {
        const response = await request(app).get('/spencer');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Spencer is cool');
    });
});

jest.mock('../controllers/ContactController');

describe('Contact routes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('POST /contacts creates a contact', async () => {
        const mockCreateContact = contactController.createContact as jest.MockedFunction<typeof contactController.createContact>;
        mockCreateContact.mockImplementation(async (req: Request, res: Response) => {
            return res.status(201).json({
                id: '123',
                ...req.body
            });
        });

        const newContact = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            favoriteColor: 'blue',
            birthday: '1990-05-15'
        };

        const response = await request(app)
            .post('/contacts')
            .send(newContact);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: '123',
            ...newContact
        });
    });

    test('GET /contacts retrieves all contacts', async () => {
        const mockGetContacts = contactController.getContacts as jest.MockedFunction<typeof contactController.getContacts>;
        mockGetContacts.mockImplementation(async (req: Request, res: Response): Promise<void> => {
            res.status(200).json([{
                id: '123',
                firstName: 'Alice',
                lastName: 'Smith',
                email: 'alice.smith@example.com',
                favoriteColor: 'green',
                birthday: '1985-09-15'
            }]);
            return; // Explicitly return void
        });

        const response = await request(app).get('/contacts');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([{
            id: '123',
            firstName: 'Alice',
            lastName: 'Smith',
            email: 'alice.smith@example.com',
            favoriteColor: 'green',
            birthday: '1985-09-15'
        }]);
    });
});