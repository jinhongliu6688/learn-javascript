import {getWeatherDescription} from "./weather.js";

/**
 * @param {string} cityName
 */
const logWeatherDescription = cityName => {
    getWeatherDescription(cityName).then(value => console.log(value))
}

// Sample usage - do not modify
logWeatherDescription("Amsterdam"); // will eventually log "Cloudy"
logWeatherDescription("Tokyo"); // will eventually log "Sunny"
