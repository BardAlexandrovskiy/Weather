export default class Weather {
  // eslint-disable-next-line class-methods-use-this
  getWeather(cityName) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=12c7488f70bcd015f75b9a10d559d91f`
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(weather => {
        const obj = {
          temp: Math.round(((weather.main.temp - 273.15) * 100) / 100),
          cloudiness: weather.clouds.all,
          weatherStatus: weather.weather[0].description,
          city: weather.name,
          wind: weather.wind.speed,
          humidity: weather.main.humidity
        };
        return obj;
      });
  }
}
