const express = require("express");
const router = express.Router();
const peliculasController = require("../controllers/peliculasController");

router.get("/", peliculasController.list);
router.get("/detail/:id", peliculasController.detail);
router.get("/search", peliculasController.search);

router.post("/create", peliculasController.create);
router.put("/edit/:id", peliculasController.edit);
router.delete("/delete/:id", peliculasController.delete);

module.exports = router;
