const { CRUDRepository } = require('./CRUDRepository');

class UserRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}


module.exports = {
    UserRepository
}