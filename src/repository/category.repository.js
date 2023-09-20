const { CRUDRepository } = require('./CRUDRepository');
const { Category } = require('../models/category.model');
class CategoryRepository extends CRUDRepository {
    constructor() {
        super(Category);
    }
}


module.exports =
    CategoryRepository