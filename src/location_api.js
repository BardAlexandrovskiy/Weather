/* eslint-disable class-methods-use-this */
export default class LocationApi {
  getMyIp() {
    return fetch('https://api.ipify.org?format=json')
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(objIp => objIp.ip);
  }

  getMyLocation(ip) {
    return fetch(`http://api.sypexgeo.net/json/${ip}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(location => location.city.name_en);
  }
}
