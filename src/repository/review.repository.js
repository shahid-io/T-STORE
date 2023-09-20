const { CRUDRepository } = require('./CRUDRepository');
const { Review } = require('../models/review.model');
class ReviewRepository extends CRUDRepository {
    constructor() {
        super(Review);
    }
}

module.exports = { ReviewRepository };