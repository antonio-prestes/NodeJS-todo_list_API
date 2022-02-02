const {response} = require("express");

exports.get = (req, res) => {
    console.log("GET")
    res.send("ok get")
}
exports.getAll = (req, res) => {
    console.log("GET")
    res.send("ok getall")
}
exports.update = (req, res) => {
    console.log("UPDATE")
    res.send("ok update")
}
exports.add = (req, res) => {
    console.log("ADD")
    res.send("ok add")
}
exports.delete = (req, res) => {
    console.log("DELETE")
    res.send("ok delete")
}