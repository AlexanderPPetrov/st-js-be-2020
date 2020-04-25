import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql/GraphQLSchema";
import dotenv from "dotenv";
dotenv.config();

import jwt from "express-jwt";

const auth = jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
})

const app = express();

const PORT = process.env.PORT || "3000";
const db = process.env.MONGODB_URL;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
    autoIndex: true,
    useCreateIndex: true,
}

mongoose.connect(db, options).then(()=>{
    console.log("Connected to MongoDB");
}).catch(error => console.log(error));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    auth,
    expressGraphQL( req => {
        return {
            schema,
            context: {
                user: req.user
            },
            graphiql: true,
            formatError: error => ({
                message: error.mesage,
                validationErrors: error.originalError && error.originalError.validationErrors,
                locations: error.locations,
                path: error.path
            })
        }
    })
)

app.listen(PORT, ()=> {
    console.log(`Server running at: ${PORT}`)
})