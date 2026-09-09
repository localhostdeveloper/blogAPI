import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
const app = express();



app.use(express.json());
app.use(cors())
app.use("/user", router)

export default app;