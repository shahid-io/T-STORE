const { CRUDRepository } = require('./CRUDRepository');
const { Address } = require('../models/address.model');
class AddressRepository extends CRUDRepository {
    constructor() {
        super(Address);
    }

    addressByUserId(id) {
        try {
            const address = Address.find({ user: id });
            if (!address) {
                throw new Error("Address not found");
            }
            return address;
        } catch (error) {
            throw error;
        }
    }

}

module.exports =
    AddressRepository
