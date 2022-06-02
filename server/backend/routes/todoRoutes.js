const express = require('express')
const router = express.Router()
const {getTodos, setTodo, updateTodo, deleteTodo} = require('../controllers/todoController')

router.route('/').get(getTodos).post(setTodo)

router.route('/:id').delete(deleteTodo).put(updateTodo)




module.exports = router