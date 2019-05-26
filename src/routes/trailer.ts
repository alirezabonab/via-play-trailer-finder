import express = require("express");
import { TrailerController } from "../controllers";
import { awaitHandlerFactory } from "../common/routerHelper";
const router = express.Router();

router.post("/", awaitHandlerFactory(TrailerController.getTrailerByViaPlayURL()));

export default router;
