const TodoModel = require("../model/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const createTodo = await TodoModel.create(req.body);
    res.status(200).json(createTodo)
  } catch (err) {
    next(err);
  }
};
