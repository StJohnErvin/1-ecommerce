const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");


const { create, read } = require("../controllers/product");

router.post("/product", authCheck, adminCheck, create);
router.get("/products", read);

module.exports = router;
