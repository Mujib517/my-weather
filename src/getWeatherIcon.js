import sunny from './img/sunny.png';
import cloudy from './img/cloudy.png';
import rain from './img/rain.png';
import snow from './img/snow.png';
import thunderstorm from './img/thunderstorms.png';

export default (weatherCondition) => {
    const condition = weatherCondition.toLowerCase();
    if (condition.includes("clouds")) {
        return cloudy;
    } else if (condition.includes("rain")) {
        return rain;
    } else if (condition.includes("snow")) {
        return snow;
    } else if (condition.includes("thunderstorm")) {
        return thunderstorm;
    }
    return sunny;
}