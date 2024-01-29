import { Router } from "express";

import {
    createPaisController,
    getPaisesByIdController,
    getPaisesController,
    putPaisController,
    deletedPaisController,
} from "./dependencies.pais"

const paisRouter = Router();

paisRouter.get('/', getPaisesController.run.bind(getPaisesController));
paisRouter.get('/:id', getPaisesByIdController.run.bind(getPaisesByIdController));
paisRouter.post('/', createPaisController.run.bind(createPaisController));
paisRouter.put('/:id', putPaisController.run.bind(putPaisController));
paisRouter.delete('/:id', deletedPaisController.run.bind(deletedPaisController));

export default paisRouter;