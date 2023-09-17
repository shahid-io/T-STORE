const { CRUDRepository } = require('./CRUDRepository');

class AddressRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}

module.exports = {
    AddressRepository
}