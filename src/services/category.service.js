const { CategoryRepository } = require('../repository');


const categoryRepository = new CategoryRepository();

// Add Tshirt
async function addCategory(data) {
    try {
        const category = await categoryRepository.create(data);
        return category;
    } catch (error) {
        throw error;
    }
}

async function getCategories() {
    try {
        const categories = await categoryRepository.getAll();
        return categories;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addCategory, getCategories
}