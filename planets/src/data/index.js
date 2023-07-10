// const planets = require('./planets.json');
const axios = require('axios');

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Planet");
    },
    getById: async (id) => {
        return await axios.get(`http://database:8004/Planet/${id}`);
    },
    create: async (object) => {
        return await axios.post("http://database:8004/", object);
    }
}