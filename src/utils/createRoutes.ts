import express from 'express';

function createRoutes(controller: any) {
    const router = express.Router();

    if (controller.createContact) {
        router.post('/', controller.createContact);
    }
    if (controller.getContacts) {
        router.get('/', controller.getContacts);
    }
    if (controller.getContact) {
        router.get('/:id', controller.getContact);
    }
    if (controller.updateContact) {
        router.put('/:id', controller.updateContact);
    }
    if (controller.deleteContact) {
        router.delete('/:id', controller.deleteContact);
    }

    return router;
}

export default createRoutes;