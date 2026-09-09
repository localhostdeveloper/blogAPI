// import express from "express";
import app from "./init.js";
import dotenv from "dotenv";
import sequelize from "./database/dbConnection.js";

dotenv.config()


const {PORT} = process.env

// Initialize express Application
// const app = express();


const StartServer =async ()=>{

    try{
        await sequelize.authenticate({alter: true});
        app.get("/", (_,res)=>{
            res.status(200).json({message: "ok"})
        })
        console.log("Database is connected")
        app.listen(PORT, ()=>{
        console.log(`BlogAPI Server is running successfully on http://127.0.0.1:${PORT}`)
    })
    } catch(err){
        console.log(" error database did not connect")
    }

};


// call the 
StartServer();

