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
        const { name, price, size, color, image } = req.body;
        const tshirt = await TshirtService.addTshirt(
            {
                name, price, size, color, image
            }
        );
        res.json({ message: 'Tshirt created successfully', tshirt });
    } catch (error) {
        res.status(500).json({ message: 'Error creating tshirt', error: error.message });
    }
}

module.exports = {
    addTshirt
};