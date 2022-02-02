const express =  require("express")
const app = require("../app");
const router = express.Router();
const controller = require("../controllers/todoController")

router.get("/", controller.getAll)
router.get("/:id", controller.get)
router.post("/", controller.add)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

module.exports = router;