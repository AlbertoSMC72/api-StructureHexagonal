import { MysqlPaisRepository } from "./dbRepositorios/mysql.respository";

import{
    CreatePaisController,
    DeletedPaisController,
    GetPaisesController,
    GetPaisesByIdController,
    PutPaisController
} from "./controller/index.controller";

import{
    CreatePaisService,
    DeletedPaisService,
    GetPaisesService,
    GetPaisesByIdService,
    ModificarPaisService
} from "../application/services/index.service";

const mysqlPaisRepository = new MysqlPaisRepository();

//se iyectan la dependencias de la db a los servicios
const createPaisService = new CreatePaisService(mysqlPaisRepository);
const getPaisesByIdService = new GetPaisesByIdService(mysqlPaisRepository);
const getPaisesService = new GetPaisesService(mysqlPaisRepository);
const modificarPaisService = new ModificarPaisService(mysqlPaisRepository);
const deletedPaisService = new DeletedPaisService(mysqlPaisRepository);

//controladores a traves de los servicios
export const createPaisController = new CreatePaisController(createPaisService);
export const getPaisesByIdController = new GetPaisesByIdController(getPaisesByIdService);
export const getPaisesController = new GetPaisesController(getPaisesService);
export const putPaisController = new PutPaisController(modificarPaisService);
export const deletedPaisController = new DeletedPaisController(deletedPaisService);