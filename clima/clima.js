// Creamos un o bjeto de axios 
const axios = require('axios');

const getClima = async (lat, lng) => {

    // https://api.openweathermap.org/data/2.5/weather?lat=40.67&lon=-73.94&appid=4343f0c67575ba0959007b6418ccce30
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4343f0c67575ba0959007b6418ccce30`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}