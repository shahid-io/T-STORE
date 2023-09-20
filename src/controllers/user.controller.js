const { UserService } = require('../services');
const { Auth } = require('../utils/common');

/**
 * POST /api/users
 * @param { username, email, password, isAdmin } req : POST
 * @param { user } res 
 */
async function signup(req, res) {
    try {
        const { username, email, password, isAdmin } = req.body;
        const user = await UserService.signupUser(
            {
                username, email, password, isAdmin
            }
        );
        res.json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await UserService.loginUser(
            {
                email, password
            }
        );
        res.json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
}

async function updateUser(req, res) {
    try {
        const userByToken = Auth.getUserInfo(req);
        const { id } = userByToken;
        const { username, email, password, isAdmin, status } = req.body;
        const user = await UserService.updateUser(
            id, {
            username, email, password, isAdmin, status
        }
        );
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
}
module.exports = {
    signup, login, updateUser
};
