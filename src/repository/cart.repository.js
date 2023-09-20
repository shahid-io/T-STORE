const { CRUDRepository } = require('./CRUDRepository');
const { Cart } = require('../models/cart.model');
class CartRepository extends CRUDRepository {
    constructor() {
        super(Cart);
    }
}

module.exports = { CartRepository };
