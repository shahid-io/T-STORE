const { CRUDRepository } = require('./CRUDRepository');

class TStore extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}
