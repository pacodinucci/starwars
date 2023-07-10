// const characters = require('./characters.json');
const axios = require("axios");

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Character");
    },
    getById: async (id) => {
        return await axios.get(`http://database:8004/Character/${id}`);
    },
    create: async (object) => {
        return await axios.post("http://database:8004/Character", object);
    }
};