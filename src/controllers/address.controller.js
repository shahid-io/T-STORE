const { AddressService } = require('../services');
const { Auth } = require('../utils/common');

async function addAddress(req, res) {
    try {
        const data = req.body;
        console.log(data);
        const address = await AddressService.addAddress(data);
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getAddress(req, res) {
    try {
        const user = Auth.getUserInfo(req);
        const address = await AddressService.getAddress(user.id);
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateAddress(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const address = await AddressService.updateAddress(id, data);
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json(error);
    }
}
async function destroyAddress(req, res) {
    try {
        const id = req.params.id;
        const address = await AddressService.destroyAddress(id);
        res.status(200).json({ message: 'Address deleted successfully', address: address });
    } catch (error) {
        res.status(500).json(error);
    }
}




module.exports = {
    addAddress, getAddress, updateAddress, destroyAddress
}