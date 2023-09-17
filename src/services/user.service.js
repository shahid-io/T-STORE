const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require('../repository');

const userRepository = new UserRepository();

async function registerUser(data) {
    try {
        const user = await userRepository.create(data);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerUser,
}
