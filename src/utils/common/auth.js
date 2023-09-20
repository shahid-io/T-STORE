const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ServerConfig } = require("../../config");

// function checkPassword(plainPassword, encryptedPassword) {
//     try {
//         return bcrypt.compareSync(plainPassword, encryptedPassword);
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

// function createToken(input) {
//     try {
//         console.log("Object -> ", input);
//         console.log("check------------", jwt.sign(input, ServerConfig.JWT_SECRET, {
//             expiresIn: ServerConfig.JWT_EXPIRY,
//         }))
//         return jwt.sign(input, ServerConfig.JWT_SECRET, {
//             expiresIn: ServerConfig.JWT_EXPIRY,
//         });
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }
function verifyToken(token) {
    try {
        return jwt.verify(token, ServerConfig.SECRET_KEY);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function decodeToken(token) {
    return jwt.verify(token, ServerConfig.SECRET_KEY);
};

function getUserInfo(req) {
    const token = req.headers['x-access-token'];
    const user = decodeToken(token);
    return user;
};

module.exports = {
    // checkPassword,
    // createToken,
    verifyToken,
    getUserInfo
};