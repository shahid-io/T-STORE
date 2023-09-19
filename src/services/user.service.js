const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require('../repository');

const userRepository = new UserRepository();

async function signupUser(data) {
    try {
        const user = await userRepository.signup(data);
        return user;
    } catch (error) {
        throw error;
    }
}

async function loginUser(data) {
    try {
        const user = await userRepository.login(data);
        return user;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    signupUser,
    loginUser
}
