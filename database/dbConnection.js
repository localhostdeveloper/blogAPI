import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const {SERVICE_URI} = process.env

const sequelize = new Sequelize(SERVICE_URI, {dialect: "mysql"});

export default sequelize;