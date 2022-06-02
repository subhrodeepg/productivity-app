const asyncHandler = require("express-async-handler");
const Todo = require("../model/todoModel");

//@desc Get goals
//@route GET /api/goals
//@access Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

//@desc Set goals
//@route POST /api/goals
//@access Private
const setTodo = asyncHandler(async (req, res) => {
  // if(!req.body.text) {
  //     res.status(400)
  //     throw new Error('Please add a text field')
  // }

  const todo = await Todo.create({
    text: req.body.text,
    time: req.body.time,
    date: req.body.date
  });

  res.json(todo);
});

//@desc Put goals
//@route PUT /api/goals
//@access Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ message: `Update goal ${req.params.id}` });
});

//@desc Delete goals
//@route DELETE /api/goals
//@access Private
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await todo.remove();
  res.json({ id: req.params.id });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo
};
