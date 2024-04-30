// import express from 'express';
// import request from 'supertest';
// import createRoutes from './createRoutes';

// describe('createRoutes utility function', () => {
//   // Define a mock controller
//   const mockController = {
//     createContact: jest.fn().mockImplementation((req, res) => res.status(201).send('Contact Created')),
//     getContacts: jest.fn().mockImplementation((req, res) => res.status(200).send('All Contacts')),
//     getContact: jest.fn().mockImplementation((req, res) => res.status(200).send('Single Contact')),
//     updateContact: jest.fn().mockImplementation((req, res) => res.status(200).send('Contact Updated')),
//     deleteContact: jest.fn().mockImplementation((req, res) => res.status(204).send())
//   };

// this needs to not be any//   let app: any;

//   beforeEach(() => {
//     app = express(); // Create a new Express application for each test to avoid test contamination
//     const router = createRoutes(mockController); // Create routes using the mock controller
//     app.use('/contacts', router); // Use the created router in the app
//   });

//   it('should handle POST requests to create a contact', async () => {
//     const response = await request(app).post('/contacts/');
//     expect(response.status).toBe(201);
//     expect(response.text).toBe('Contact Created');
//     expect(mockController.createContact).toHaveBeenCalled();
//   });

//   it('should handle GET requests to retrieve all contacts', async () => {
//     const response = await request(app).get('/contacts/');
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('All Contacts');
//     expect(mockController.getContacts).toHaveBeenCalled();
//   });

//   it('should handle GET requests to retrieve a single contact by ID', async () => {
//     const response = await request(app).get('/contacts/123'); // Using '123' as a sample ID
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('Single Contact');
//     expect(mockController.getContact).toHaveBeenCalledWith(expect.anything(), expect.anything()); // Check if it was called
//   });

//   it('should handle PUT requests to update a contact', async () => {
//     const response = await request(app).put('/contacts/123'); // Using '123' as a sample ID
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('Contact Updated');
//     expect(mockController.updateContact).toHaveBeenCalled();
//   });

//   it('should handle DELETE requests to delete a contact', async () => {
//     const response = await request(app).delete('/contacts/123'); // Using '123' as a sample ID
//     expect(response.status).toBe(204);
//     expect(mockController.deleteContact).toHaveBeenCalled();
//   });
// });