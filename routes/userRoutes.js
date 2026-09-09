import { Router } from "express";

import { register } from "../controllers/userController.js";


const router = Router();


router.post("/signup", register);


export default router;