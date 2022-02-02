const mongoose = require("mongoose")
require('dotenv').config()

const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS

module.exports = {
    init: () => {
        mongoose.connect(`mongodb+srv://${user}:${pass}@dieg-mongo.nvtds.mongodb.net/todo_sample?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true
        })
            .then((res) => console.log(`Connection Succesful ${res}`))
            .catch((err) => console.log(`Connection error ${err} `))
    }
}