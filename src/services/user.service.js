const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repository");
const { Auth } = require("../utils/common");
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

async function findUserById(data) {
  try {
    const user = await userRepository.get(data);
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, data) {
  try {
    const user = await userRepository.update(id, data);
    return user;
  } catch (error) {
    throw error;
  }
}
async function updateUserProfile(id, data) {
  try {
    const user = await userRepository.update(id, data);
    return user;
  } catch (error) {
    throw error;
  }
}

// async function authenticateUser(token) {
//     try {
//         if (!token) {
//             throw new AppError("Missing JWT token", StatusCodes.BAD_REQUEST);
//         }

//         const userData = Auth.verifyToken(token);

//         // Assuming you have a user service to fetch user by ID
//         const user = await userService.getUserById(userData.id);

//         if (!user) {
//             throw new AppError("User not found", StatusCodes.NOT_FOUND);
//         }

//         return user; // Return user object after successful authentication
//     } catch (error) {

//         if (error.name == "JsonWebTokenError") {
//             throw new AppError("Invalid JWT token", StatusCodes.BAD_REQUEST);
//         }

//         if (error.name == "TokenExpiredError") {
//             throw new AppError("JWT token expired", StatusCodes.BAD_REQUEST);
//         }

//         throw new Error(
//             "Something went wrong",
//             StatusCodes.INTERNAL_SERVER_ERROR
//         );
//     }
// }

module.exports = {
  signupUser,
  loginUser,
  updateUser,
  findUserById,
  // authenticateUser
};
