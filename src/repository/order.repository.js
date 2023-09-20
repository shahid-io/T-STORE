const { CRUDRepository } = require('./CRUDRepository');
const { Order } = require('../models/order.model');
class OrderRepository extends CRUDRepository {
    constructor() {
        super(Order);
    }
}

module.exports = {
    OrderRepository
}
