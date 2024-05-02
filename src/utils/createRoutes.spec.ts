const express = require('express');
import createRoutes from './createRoutes';

// Mock controllers
const mockContactController = {
  createContact: jest.fn((req, res) => res.sendStatus(201)),
  getContacts: jest.fn((req, res) => res.sendStatus(200)),
  getContact: jest.fn((req, res) => res.sendStatus(200)),
  updateContact: jest.fn((req, res) => res.sendStatus(204)),
  deleteContact: jest.fn((req, res) => res.sendStatus(204)),
};

describe('createRoutes', () => {
    it('should register the correct routes with appropriate methods', () => {
      const router = createRoutes(mockContactController, 'contact');
  
      const routes = router.stack.map(layer => ({
        path: layer.route.path,
        methods: Object.keys(layer.route.methods)
      }));
  
      expect(routes).toEqual([
        { path: '/', methods: ['post'] },
        { path: '/', methods: ['get'] },
        { path: '/:id', methods: ['get'] },
        { path: '/:id', methods: ['put'] },
        { path: '/:id', methods: ['delete'] }
      ]);
    });
  });