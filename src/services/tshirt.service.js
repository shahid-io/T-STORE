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

// Get Tshirts
async function getTshirts() {
    try {
        const tshirts = await tshirtRepository.getAll();
        return tshirts;
    } catch (error) {
        throw error;
    }
}

// Get Tshirts with category names
async function getAllTshirtsWithCategoryNames() {
    try {
        const tshirts = await tshirtRepository.getAllTshirtsWithCategoryNames();
        return tshirts;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    addTshirt, getTshirts, getAllTshirtsWithCategoryNames
}