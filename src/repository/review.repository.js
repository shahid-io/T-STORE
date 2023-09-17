const { CRUDRepository } = require('./CRUDRepository');

class ReviewRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}

module.exports = { ReviewRepository };