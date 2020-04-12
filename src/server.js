import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql/GraphQLSchema";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || "3000";
const db = process.env.MONGODB_URL;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
    console.log("Connected to MongoDB");
}).catch(error => console.log(error));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
)

app.listen(PORT, ()=> {
    console.log(`Server running at: ${PORT}`)
})