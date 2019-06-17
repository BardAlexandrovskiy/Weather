import LocationApi from './location_api';
import Dom from './dom';
import Weather from './weather';

const locationApi = new LocationApi();
const dom = new Dom();
const weather = new Weather();

function getWeatherByCity(city) {
  if (!city) {
    dom.showPreloader();
  }
  weather
    .getWeather(city || dom.getCityValueFromInput())
    .then(weatherInfo => {
      dom.setInfoWeather(weatherInfo);
    })
    .catch((status) => {
      dom.errorInfoTextDiv.innerText = status;
      dom.showErrorInfo();
    })
    .finally(() => dom.hidePreloader());
}

function appStart() {
  dom.showPreloader();
  locationApi
    .getMyIp()
    .then(ip => locationApi.getMyLocation(ip))
    .then(city => getWeatherByCity(city));
}

function findNewCity() {
  if (dom.findCityInput.value !== '') {
    getWeatherByCity();
  } else dom.emptyInput();
}

appStart();

dom.findCityInput.addEventListener('keydown', key => {
  if (key.keyCode === 13) {
    findNewCity()
  }
});

window.addEventListener('keydown', key => {
  if (key.keyCode === 13) {
    if (dom.errorInfoParentDiv.style.display === 'flex') {
      dom.hideErrorInfo();
    }
  }
});

dom.findCityButton.addEventListener('click', findNewCity);

dom.errorInfoOkButton.addEventListener('click', () => dom.hideErrorInfo());
