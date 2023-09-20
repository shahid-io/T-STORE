const { CRUDRepository } = require('./CRUDRepository');

const { Tshirt } = require('../models/tshirt.model');

class TshirtRepository extends CRUDRepository {
    constructor() {
        super(Tshirt);
        console.log(Tshirt);
    }
}


module.exports = TshirtRepository 
