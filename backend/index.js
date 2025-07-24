const express = require("express");
const path = require ("path");

const {connectToMongooseDb} = require("./connect");

const app = express();
const PORT = 8002;

connectToMongooseDb(process.env.MONGODB ?? "mongodb://localhost:27017/e-commerce").
then(() => {
    console.log("MongoDb connected");
})

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started @: ${PORT}`);
});