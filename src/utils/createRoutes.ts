import express, { Router } from 'express';

function createRoutes(controller: any, entityName: string): Router {
    const router = express.Router();

    const capitalizedEntityName = entityName.charAt(0).toUpperCase() + entityName.slice(1);

    const createHandler = `create${capitalizedEntityName}`;
    const getHandler = `get${capitalizedEntityName}`;
    const getMultipleHandler = `get${capitalizedEntityName}s`;
    const updateHandler = `update${capitalizedEntityName}`;
    const deleteHandler = `delete${capitalizedEntityName}`;

    if (controller[createHandler]) {
        router.post('/', controller[createHandler]);
    }
    if (controller[getMultipleHandler]) {
        router.get('/', controller[getMultipleHandler]);
    }
    if (controller[getHandler]) {
        router.get('/:id', controller[getHandler]);
    }
    if (controller[updateHandler]) {
        router.put('/:id', controller[updateHandler]);
    }
    if (controller[deleteHandler]) {
        router.delete('/:id', controller[deleteHandler]);
    }

    return router;
}

export default createRoutes;
