const app = require("./app")
const db = require("./mongodb")

db.init();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server on in port ${port}`)
})