const { CategoryService } = require('../services');

/**
 * 
 * @param { name } req 
 * @param {*} res 
 */

async function addCategory(req, res) {
    try {
        const { name } = req.body;
        const tshirt = await CategoryService.addCategory({ name });
        res.json({ message: 'Category created successfully', tshirt });
    } catch (error) {
        res.status(500).json({ message: 'Error creating Category', error: error.message });
    }
}

async function getCategories(req, res) {
    try {
        const categories = await CategoryService.getCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error getting Categories', error: error.message });
    }
}


module.exports = {
    addCategory, getCategories
};