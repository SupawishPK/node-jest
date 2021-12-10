const TodoModel = require("../model/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const createTodo = await TodoModel.create(req.body);
    res.status(200).json(createTodo);
  } catch (err) {
    next(err);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
  } catch (err) {
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const todoModel = await TodoModel.findById(req.params.todoId);
    if (todoModel) {
      res.status(200).json(todoModel);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const updateTodo = await TodoModel.findByIdAndUpdate(
      req.params.todoId,
      req.body,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (updateTodo) {
      res.status(200).json(updateTodo);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
};
