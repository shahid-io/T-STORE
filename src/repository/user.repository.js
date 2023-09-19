const { CRUDRepository } = require('./CRUDRepository');
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserRepository extends CRUDRepository {

    constructor() {
        super(User);
        console.log(User);
    }

    async signup(data) {
        try {
            const { username, email, password, isAdmin } = data;
            console.log("**** FROM UserRepository *****", data);
            const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
            const user = new User({
                username: username,
                email: email,
                password: hashedPassword,
                isAdmin: isAdmin,
            });
            console.log("**** FROM UserRepository *****", user);
            const savedUser = await user.save();
            return savedUser;

        } catch (error) {
            throw error;
        }
    }

    async login(data) {
        try {
            const { email, password } = data;

            const user = await User.findOne({ email: email });

            if (!user) {
                throw new Error('User not found');
            }

            const passwordMatch = bcrypt.compareSync(password, user.password);

            if (!passwordMatch) {
                throw new Error('Incorrect password');
            }

            const token = jwt.sign(
                { username: user.username, email: user.email, isAdmin: user.isAdmin },
                process.env.SECRET_KEY,
                { expiresIn: '1h' }
            );
            return { message: 'Authentication successful', token: token };

        } catch (error) {
            throw error;
        }
    }

    verifyToken(req, res, next) {
        const token = req.headers['x-access-token'];

        if (!token) {
            return res.status(403).json({ message: 'No token provided.' });
        }

        jwt.verify(token, 'your-secret-key', (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Failed to authenticate token.' });
            }

            req.user = decoded;
            next();
        });
    }
}

module.exports =
    UserRepository