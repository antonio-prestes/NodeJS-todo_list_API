const Todo = require("../models/Todo")


module.exports = class TodoService {

    static async getTodo(id) {
        try {
            return Todo.findById(id);
        } catch (error) {
            console.log(`Could not fetch todos ${error}`)
        }
    }

    static async getAllTodos() {
        try {
            return Todo.find();
        } catch (error) {
            console.log(`Could not fetch todos ${error}`)
        }
    }

    static async createTodo(data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                finished: data.finished,
                date: data.date
            }
            return await new Todo(newTodo).save();
        } catch (error) {
            console.log(error)
        }
    }

    static async updateTodo(id, data) {
        let todoUpdated = await Todo.findOneAndUpdate(id, data, {new: true}
        )
        return (todoUpdated)
    }

    static async deleteTodo(_id) {
        try {
            await Todo.deleteOne(_id)
        } catch (error) {
            console.log(error)
        }
    }
}