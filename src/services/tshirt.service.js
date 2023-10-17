const { StatusCodes } = require("http-status-codes");
const { TshirtRepository } = require("../repository");
const { Tshirt } = require("../models/tshirt.model");

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

// Update Tshirt
async function updateTshirt(id, data) {
  try {
    const tshirt = await tshirtRepository.update(id, data);
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
// Get a TShirts
async function getTshirt(id) {
  try {
    const tshirt = await tshirtRepository.get(id);
    return tshirt;
  } catch (error) {
    throw error;
  }
}
async function getTshirtBySlug(slug) {
  try {
    const tshirt = await tshirtRepository.getBySlug(slug);
    return tshirt;
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
// Get Tshirts with category names
async function getAllTshirtsWithCategoryName(id) {
  try {
    const tshirts = await tshirtRepository.getAllTshirtsWithCategoryName(id);
    return tshirts;
  } catch (error) {
    throw error;
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
