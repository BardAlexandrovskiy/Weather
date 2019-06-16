export default class Dom {
  constructor() {
    this.loadingDivStyle = document.querySelector('#loading').style;
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
    this.loadingDivStyle.display = 'block';
  }

  hidePreloader() {
    this.loadingDivStyle.display = 'none';
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
}
