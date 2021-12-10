const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {
  const createTodo = TodoModel.create(req.body);
  res.status(201).json(createTodo)
};
