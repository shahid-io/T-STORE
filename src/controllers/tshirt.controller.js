const { TshirtService } = require("../services");
const { slugify } = require("../utils/slugify");

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
    if (req.body.name) req.body.slug = slugify(req.body.name);
    const original_price = req.body.original_price,
      selling_price = req.body.price;
    req.body.discount = parseInt(
      ((original_price - selling_price) / original_price) * 100
    );
    const tshirt = await TshirtService.addTshirt(req.body);
    res.json({ message: "Tshirt created successfully", tshirt });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating tshirt", error: error.message });
  }
}
async function updateTshirt(req, res) {
  const id = req.params.id;
  try {
    if (req.body.name) req.body.slug = slugify(req.body.name);
    const tshirt = await TshirtService.updateTshirt(id, req.body);
    res.json({ message: "Tshirt updated successfully", tshirt });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating tshirt", error: error.message });
  }
}

async function getTshirts(req, res) {
  try {
    const tshirts = await TshirtService.getTshirts();
    res.json({ message: "Tshirts fetched successfully", tshirts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tshirts", error: error.message });
  }
}
async function getTshirt(req, res) {
  const id = req.params.id;
  try {
    const tshirts = await TshirtService.getTshirt(id);
    res.json({ message: "Tshirts fetched successfully", tshirts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tshirts", error: error.message });
  }
}
async function getTshirtBySlug(req, res) {
  const slug = req.params.slug;
  try {
    const tshirts = await TshirtService.getTshirtBySlug(slug);
    res.json({ message: "Tshirts fetched successfully", tshirts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tshirts", error: error.message });
  }
}

async function getAllTshirtsWithCategoryNames(req, res) {
  try {
    const tshirts = await TshirtService.getAllTshirtsWithCategoryNames();
    res.json({ message: "Tshirts fetched successfully", tshirts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tshirts", error: error.message });
  }
}

async function getAllTshirtsWithCategoryName(req, res) {
  const id = req.params.id;
  try {
    const tshirts = await TshirtService.getAllTshirtsWithCategoryName(id);
    res.json({ message: "Tshirts fetched successfully", tshirts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tshirts", error: error.message });
  }
}

module.exports = {
  addTshirt,
  updateTshirt,
  getTshirt,
  getTshirts,
  getTshirtBySlug,
  getAllTshirtsWithCategoryNames,
  getAllTshirtsWithCategoryName,
};
