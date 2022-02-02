const {response, request} = require("express");
const TodoService = require("../services/TodoService")

exports.get = async (req, res) => {
    try {
        const todo = await TodoService.getTodo(req.params.id)
        res.json(todo)
    } catch (error) {
        return res.status(500).json({error: error})
    }

}
exports.getAll = async (req, res) => {
    const todos = await TodoService.getAllTodos();
    try {
        if (!todos) {
            return res.status(404).json("There are no todos published yet!")
        }
        res.json(todos)
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.update = (req, res) => {
    console.log("UPDATE")
    res.send("ok update")
}
exports.add = async (req, res) => {
    try {
        const createTodo = await TodoService.createTodo(req.body);
        res.status(201).json(createTodo)
    } catch (error) {
        return res.status(500).json({error: error})
    }
}
exports.delete = async (req, res) => {
    try {
        await TodoService.deleteTodo(req.body._id)
        res.status(200).json("Todo deleted successfully")
    } catch (error) {
        return res.status(500).json({error: error})
    }
}