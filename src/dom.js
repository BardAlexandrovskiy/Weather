export default class Dom {
  constructor() {
    this.preloaderDiv = document.querySelector('#preloader');
    this.errorInfoParentDiv = document.querySelector('#error_info');
    this.errorInfoTextDiv = document.querySelector('#error_info_text');
    this.errorInfoOkButton = document.querySelector('#error_info_ok_button');
    this.cityDiv = document.querySelector('#city');
    this.cloudinessDiv = document.querySelector('#cloudiness');
    this.weatherStatusDiv = document.querySelector('#weather_status');
    this.tempDiv = document.querySelector('#temp');
    this.humidityDiv = document.querySelector('#humidity');
    this.windDiv = document.querySelector('#wind');
    this.findCityButton = document.querySelector('#find_city_button');
    this.findCityInput = document.querySelector('#find_city_input');
  }

  showPreloader() {
    this.preloaderDiv.style.display = 'flex';
  }

  hidePreloader() {
    this.preloaderDiv.style.display = 'none';
  }

  showErrorInfo() {
    this.findCityInput.blur();
    this.errorInfoParentDiv.style.display = 'flex';
  }

  hideErrorInfo() {
    this.errorInfoParentDiv.style.display = 'none';
    this.findCityInput.focus();
  }

  setInfoWeather(obj) {
    this.cityDiv.innerText = obj.city;
    this.cloudinessDiv.innerText = `cloudiness: ${obj.cloudiness}%`;
    this.weatherStatusDiv.innerText = obj.weatherStatus;
    this.tempDiv.innerText = `${obj.temp}°C`;
    this.humidityDiv.innerText = `humidity: ${obj.humidity}%`;
    this.windDiv.innerText = `wind speed: ${obj.wind} m/s`;
  }

  getCityValueFromInput() {
    return this.findCityInput.value;
  }

  emptyInput() {
    this.findCityInput.setAttribute('class', 'input empty_input');
    this.findCityInput.focus();
    setTimeout(() => { this.findCityInput.setAttribute('class', 'input') }, 2000);
  }
}
