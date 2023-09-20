const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    SECRET_KEY: process.env.SECRET_KEY,
};