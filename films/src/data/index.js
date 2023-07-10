const films = require('./films.json');
const axios = require('axios');

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Film");
    },
    getById: async (id) => {
        return await axios.get(`http://database:8004/Film/${id}`); 
    },
    create: async (object) => {
        return await axios.post("http://database:8004/Film", object);
    }
}