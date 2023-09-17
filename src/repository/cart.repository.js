const { CRUDRepository } = require('./CRUDRepository');

class CartRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}

module.exports = { CartRepository };
