"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    return res.json({ message: "I am here :)" });
});
exports.default = router;
