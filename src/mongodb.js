const mongoose = require("mongoose")

const user = "admin"
const pass = "admin"
const database = "todo_sample"
const serverName = "dieg-mongo.nvtds.mongodb.net"

module.exports = {
    init: () => {
        mongoose.connect(`mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           // useFindAndModify: false,
           //useCreateIndex: true,
        })
            .then((res) => console.log(`Connection Succesful ${res}`))
            .catch((err) => console.log(`Connection error ${err}`))
    }
}