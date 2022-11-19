module.exports = (app) => {
  const todo = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new Todo
  router.post("/", todo.create);

  // Retrieve all todo
  router.get("/", todo.findAll);

  // Retrieve all with pagination todo
  router.get("/:page", todo.findWithPagination);

  // Retrieve all completed todo
  router.get("/completed", todo.findAllCompleted);

  // Retrieve a single Todo with id
  router.get("/:id", todo.findOne);

  // Update a Todo with id
  router.put("/:id", todo.update);

  // Delete a Todo with id
  router.delete("/:id", todo.delete);

  // Create a new Todo
  router.delete("/", todo.deleteAll);

  app.use("/api/todo", router);
};
