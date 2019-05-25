import express = require("express");
import { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  
    return res.json({message : "I am here :)"});
  
});

export default router;
