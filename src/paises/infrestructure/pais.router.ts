import { Router } from "express";

import {
    createPaisController,
    getPaisesByIdController,
    getPaisesController,
    putPaisController,
    deletedPaisController,
} from "./dependencies.pais"

const paisRouter = Router();

paisRouter.get('/', async (req, res) => {
    try {
        await getPaisesController.run.bind(getPaisesController)(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

paisRouter.get('/:id', async (req, res) => {
    try {
        await getPaisesByIdController.run.bind(getPaisesByIdController)(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

paisRouter.post('/', async (req, res) => {
    try {
        await createPaisController.run.bind(createPaisController)(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

paisRouter.put('/:id', async (req, res) => {
    try {
        await putPaisController.run.bind(putPaisController)(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

paisRouter.delete('/:id', async (req, res) => {
    try {
        await deletedPaisController.run.bind(deletedPaisController)(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

export default paisRouter;
