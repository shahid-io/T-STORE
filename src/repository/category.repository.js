const { CRUDRepository } = require('./CRUDRepository');

class CategoryRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}


module.exports = {
    CategoryRepository
}