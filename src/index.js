import LocationApi from './location_api';
import Dom from './dom';
import Weather from './weather';

const locationApi = new LocationApi();
const dom = new Dom();
const weather = new Weather();

function changeСity() {
  dom.showPreloader();
  weather
    .getWeather(dom.changeСity())
    .then(weatherInfo => {
      dom.hidePreloader();
      dom.setInfoWeather(weatherInfo);
    })
    .catch(error => {
      alert(error);
      dom.hidePreloader();
    });
}

dom.showPreloader();
locationApi
  .getMyIp()
  .then(ip => locationApi.getMyLocation(ip))
  .then(city => weather.getWeather(city))
  .then(weatherInfo => {
    dom.hidePreloader();
    dom.setInfoWeather(weatherInfo);
  })
  .catch(error => {
    alert(error);
    dom.hidePreloader();
  });

dom.findCityInput.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    changeСity();
  }
});

dom.findCityButton.addEventListener('click', () => changeСity());
