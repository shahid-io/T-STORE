const { CRUDRepository } = require('./CRUDRepository');

class OrderRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}

module.exports = {
    OrderRepository
}
