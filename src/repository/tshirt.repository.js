const { CRUDRepository } = require('./CRUDRepository');

class TShirtRepository extends CRUDRepository {
    constructor(model) {
        super(model);
    }
}


model.exports =
    { TShirtRepository }
