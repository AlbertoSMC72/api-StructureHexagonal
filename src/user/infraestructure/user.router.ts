import { Router } from "express";
import {
  deleteUserByCorreoController,
  getAllUsersController,
  getUserByCorreoController,
  updateUserByCorreoController,
} from "./dependencies.user";
import { verifyJwt } from "../../auth/infraestructure/middlewares/jwt.middleware";

const userRouter = Router();

userRouter
  .get("/", verifyJwt, getAllUsersController.run.bind(getAllUsersController))
  .get(
    "/:correo",
    verifyJwt,
    getUserByCorreoController.run.bind(getUserByCorreoController)
  )
  .delete(
    "/:correo",
    verifyJwt,
    deleteUserByCorreoController.run.bind(deleteUserByCorreoController)
  )
  .put(
    "/:correo",
    verifyJwt,
    updateUserByCorreoController.run.bind(updateUserByCorreoController)
  );

export default userRouter;
