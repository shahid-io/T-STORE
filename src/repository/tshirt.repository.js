const { CRUDRepository } = require("./CRUDRepository");

const { Tshirt } = require("../models/tshirt.model");

class TshirtRepository extends CRUDRepository {
  constructor() {
    super(Tshirt);
  }

  async get(id) {
    try {
      const tshirt = await Tshirt.findById(id);
      return tshirt;
    } catch (error) {
      throw new Error("Error getting T-shirts with category names");
    }
  }
  async getBySlug(slug) {
    try {
      const tshirt = await Tshirt.findOne(slug);
      return tshirt;
    } catch (error) {
      throw new Error("Error getting T-shirts with category names");
    }
  }

  async getAllTshirtsWithCategoryNames() {
    try {
      const tshirts = await Tshirt.find().populate("categories", "name");
      return tshirts;
    } catch (error) {
      throw new Error("Error getting T-shirts with category names");
    }
  }
  async getAllTshirtsWithCategoryName(id) {
    try {
      const tshirts = await Tshirt.find({ categories: id }).populate(
        "categories",
        "name"
      );
      return tshirts;
    } catch (error) {
      throw new Error("Error getting T-shirts with category names");
    }
  }
}

module.exports = TshirtRepository;
