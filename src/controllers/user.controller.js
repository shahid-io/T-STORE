const { UserService } = require('../services');


/**
 * POST /api/users
 * @param { username, email, password, isAdmin } req : POST
 * @param { user } res 
 */
async function createUser(req, res) {
    try {
        const { username, email, password, isAdmin } = req.body;
        const user = await UserService.registerUser(
            {
                username, email, password, isAdmin
            }
        );
        res.json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

module.exports = {
    createUser,
};
