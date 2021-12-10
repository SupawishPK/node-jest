const TodoModel = require("../model/todo.model");

exports.createTodo = async (req, res, next) => {
  const createTodo = await TodoModel.create(req.body);
  res.status(200).json(createTodo)
};
