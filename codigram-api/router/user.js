const userRouter = require("express").Router();
const { UserController } = require("../controllers");

// auth user
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/detail/:id", UserController.detail);
userRouter.post("/auth/register", UserController.register);
userRouter.post("/auth/login", UserController.login);

module.exports = userRouter;
