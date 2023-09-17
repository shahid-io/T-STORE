const mongoose = require("mongoose");
const { MONGO_URL } = process.env;

console.log(MONGO_URL);

// const connect = async () => {
//     await mongoose.connect(MONGO_URL)
// }

async function connect() {
    mongoose
        .connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB CONNECTION ESHTABLISH");
        })
        .catch((error) => {
            console.log("DB CONNECTION FAILED");
            console.log(error);
            process.exit(1);
        });
};

module.exports = { connect };