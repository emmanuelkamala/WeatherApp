import Weather from './modules/weather';
import Storage from './modules/storage';
import UI from './modules/ui';


const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();
    $('#locModal').modal('hide');
})

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
