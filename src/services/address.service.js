
const { AddressRepository } = require('../repository');
const { UserRepository } = require('../repository');
const addressRepository = new AddressRepository();


// Add Address
async function addAddress(data) {
    try {
        const address = await addressRepository.create(data);
        return address;
    } catch (error) {
        throw error;
    }
}

// Get Address
async function getAddress(data) {
    try {
        const userRepository = new UserRepository();
        const user = await userRepository.get(data);
        const address = await addressRepository.addressByUserId(user.id);
        return address;
    } catch (error) {
        throw error;
    }
}

// Get Address with users
async function getAddressWithUser() {
    try {
        const address = await addressRepository.getAddressWithUser();
        return address;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    addAddress, getAddress, getAddressWithUser
}