const { CRUDRepository } = require('./CRUDRepository');
const { Address } = require('../models/address.model');
class AddressRepository extends CRUDRepository {
    constructor() {
        super(Address);
    }
}

module.exports =
    AddressRepository
