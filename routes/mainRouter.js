// routes/mainRouter.js
const { Router } = require("express");
const controller = require("../controllers/controller");
const usersRouter = Router();

// usersRouter.get("/", controller.genericController);
usersRouter.get("/", controller.getUsernames);
usersRouter.get("/new", controller.createUsernameGet);
usersRouter.post("/new", controller.createUsernamePost);

// usersRouter.get("/", usersController.usersListGet);
// usersRouter.get("/create", usersController.usersCreateGet);
// usersRouter.post("/create", usersController.usersCreatePost);

module.exports = usersRouter;
