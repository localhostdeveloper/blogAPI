import { Router } from "express";
import { logInUserSchema, createUserSchema } from "../schemas/userSchema.js";
import { register } from "../controllers/userController.js";
import { validate } from "../middleware/userValidation.js";

const router = Router();


router.post("/register", validate(createUserSchema), register);


export default router;