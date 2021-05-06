const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4a29db7ec38cf0793a1bf581b2339e74`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Hm, here is a low error of request :(', undefined);
        } else if (body.message) {
            callback('Some problems with coordinates!', undefined);
        } else {
            callback(undefined, 'It is currently ' + Math.round(body.main.temp - 273.15) + ' degrees out. The max temperature today is ' + Math.round(body.main.temp_max - 273.15) + ' deegrees. There is a 0% chance of rain');
        }
    })

};

module.exports = forecast;