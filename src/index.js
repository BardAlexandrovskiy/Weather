import LocationApi from './location_api';
import Dom from './dom';
import Weather from './weather';

const locationApi = new LocationApi();
const dom = new Dom();
const weather = new Weather();

function getWeatherByCity(city) {
  dom.showPreloader();
  weather
    .getWeather(city || dom.getCityValueFromInput())
    .then(weatherInfo => {
      dom.setInfoWeather(weatherInfo);
    })
    .catch(alert)
    .finally(() => dom.hidePreloader());
}

function appStart() {
  dom.showPreloader();
  locationApi
    .getMyIp()
    .then(ip => locationApi.getMyLocation(ip))
    .then(city => getWeatherByCity(city));
}

appStart();

dom.findCityInput.addEventListener('keydown', key => {
  if (key.keyCode === 13) {
    getWeatherByCity();
  }
});

dom.findCityButton.addEventListener('click', () => getWeatherByCity());
