"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const routerHelper_1 = require("../common/routerHelper");
const router = express.Router();
router.post("/", routerHelper_1.awaitHandlerFactory(controllers_1.TrailerController.getTrailerByViaPlayURL()));
exports.default = router;
