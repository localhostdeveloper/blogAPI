// import express from "express";
import app from "./init.js";
import dotenv from "dotenv";
import sequelize from "./database/dbConnection.js";

dotenv.config()


const {PORT} = process.env

// Initialize express Application
// const app = express();


const StartServer =async ()=>{
    console.log("\n ... starting server .... please wait \n")

    try{
        await sequelize.authenticate({alter: true});
        app.get("/", (_,res)=>{
            res.status(200).json({message: "ok"})
        })
        console.log("\n Database is connected \n ")
        app.listen(PORT, ()=>{
        console.log(`\n BlogAPI Server is running successfully on http://127.0.0.1:${PORT} \n`)
    })
    } catch(err){
        console.log(" error database did not connect")
    }

};


// call the 
StartServer();

