export default class Dom {
  constructor() {
    this.loading = document.querySelector('#loading').style;
    this.city = document.querySelector('#city');
    this.cloudiness = document.querySelector('#cloudiness');
    this.weatherStatus = document.querySelector('#weather_status');
    this.temp = document.querySelector('#temp');
    this.humidity = document.querySelector('#humidity');
    this.wind = document.querySelector('#wind');
    this.date = document.querySelector('#date');
    this.findCityButton = document.querySelector('#find_city_button');
    this.findCityInput = document.querySelector('#find_city_input');
  }

  showPreloader() {
    this.loading.display = 'block';
  }

  hidePreloader() {
    this.loading.display = 'none';
  }

  setInfoWeather(obj) {
    this.city.innerText = obj.city;
    this.cloudiness.innerText = `cloudiness: ${obj.cloudiness}%`;
    this.weatherStatus.innerText = obj.weatherStatus;
    this.temp.innerText = `${obj.temp}°C`;
    this.humidity.innerText = `humidity: ${obj.humidity}%`;
    this.wind.innerText = `wind speed: ${obj.wind} m/s`;
  }

  setTime(time) {
    this.date.innerText = time;
  }

  changeСity() {
    return this.findCityInput.value;
  }
}
