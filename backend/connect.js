const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function connectToMongooseDb(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongooseDb,
}