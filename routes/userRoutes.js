import { Router } from "express";
import { logInUserSchema, createUserSchema } from "../schemas/userSchema.js";
import { register,logUserIn } from "../controllers/userController.js";
import { validate } from "../middleware/userValidation.js";

const router = Router();


router.post("/register", validate(createUserSchema), register);

router.post("/login",validate(logInUserSchema), logUserIn )


export default router;