import { Router } from "express";
import Trailer from './trailer'

const router = Router();

router.use("/trailer", Trailer);

export default router;


