const { StatusCodes } = require('http-status-codes');
const { TshirtRepository } = require('../repository');


const tshirtRepository = new TshirtRepository();

// Add Tshirt
async function addTshirt(data) {
    try {
        const tshirt = await tshirtRepository.create(data);
        return tshirt;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    addTshirt
}