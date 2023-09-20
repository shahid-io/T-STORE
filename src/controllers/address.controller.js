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


module.exports = {
    addAddress, getAddress
}