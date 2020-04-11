import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || "3000";
const db = process.env.MONGODB_URL;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected");
}).catch(error => console.log(error));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        graphiql: true
    })
)

app.listen(PORT, ()=> {
    console.log(`Server running at: ${PORT}`)
})