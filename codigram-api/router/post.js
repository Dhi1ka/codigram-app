const postRouter = require("express").Router();
const { PostController } = require("../controllers");
const { authentication } = require("../middleware/authentication");

// crud post
postRouter.get("/all", PostController.getAllPosts);
postRouter.get("/detail/:id", PostController.detail);
postRouter.post("/create", authentication, PostController.create);
postRouter.put("/edit/:id", authentication, PostController.edit);
postRouter.delete("/delete/:id", authentication, PostController.delete);

module.exports = postRouter;
