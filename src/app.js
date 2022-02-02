const express = require('express')
const indexRouter = require('./routers/index')
const todoRouter = require('./routers/todo')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use("/", indexRouter);
app.use("/todo", todoRouter);

module.exports = app