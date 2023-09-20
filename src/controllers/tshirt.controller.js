const { TshirtService } = require('../services');

/**
 * POST /api/tshirts
 * @param { name, price, size, color, image } req : POST
 * @param { tshirt } res
 * @returns { tshirt }
 * @description Add a new tshirt
 * @example
 * {
 * "name": "Tshirt 1",
 * "price": 100,
 * "size": "M",
 * "color": "red",
 * "image": "https://www.google.com"
 * }
 * @returns { tshirt }
*/

async function addTshirt(req, res) {
    try {
        const { name, description, price, size, color, image, categories } = req.body;
        const tshirt = await TshirtService.addTshirt(
            {
                name, description, price, size, color, image, categories
            }
        );
        res.json({ message: 'Tshirt created successfully', tshirt });
    } catch (error) {
        res.status(500).json({ message: 'Error creating tshirt', error: error.message });
    }
}

async function getTshirts(req, res) {
    try {
        const tshirts = await TshirtService.getTshirts();
        res.json({ message: 'Tshirts fetched successfully', tshirts });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tshirts', error: error.message });
    }
}

async function getAllTshirtsWithCategoryNames(req, res) {
    try {
        const tshirts = await TshirtService.getAllTshirtsWithCategoryNames();
        res.json({ message: 'Tshirts fetched successfully', tshirts });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tshirts', error: error.message });
    }
}



module.exports = {
    addTshirt, getTshirts, getAllTshirtsWithCategoryNames
};