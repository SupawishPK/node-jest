const TodoModel = require("../model/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const createTodo = await TodoModel.create(req.body);
    res.status(200).json(createTodo)
  } catch (err) {
    next(err);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find({})
    res.status(200).json(allTodos)
  } catch (err) {
    next(err);
  }
}

exports.getTodoById = async (req, res, next) => {
  const todoModel = await TodoModel.findById(req.params.todoId)
  res.status(200).json(todoModel)
}
