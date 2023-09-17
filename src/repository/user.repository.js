const { CRUDRepository } = require('./CRUDRepository');
const { User } = require('../models/user.model');
class UserRepository extends CRUDRepository {
    
    constructor() {
        super(User);
        console.log(User);
    }
}   

module.exports =
    UserRepository