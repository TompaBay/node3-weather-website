const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7bce257dc8300d50d491c3efe3204dad&query=' + latitude + ',' + longtitude + '&units=m'

    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + '. Temperature is ' +
                body.current.temperature + ' degree. It feels like ' +
                body.current.feelslike + ' degree.'
            )
        }
    })
}

module.exports = forecast

