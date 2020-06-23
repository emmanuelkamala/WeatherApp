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
    document.getElementById('w-string').textContent === document.getElementById('w-string-two').textContent ;
})


document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('weather-change').addEventListener('click', () => {
    let w = document.getElementById('weather-change').textContent;
    ui.changeWeather(w.slice(16));
    document.getElementById('w-string-two').style.display = 'none';
})

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => alert(err));
}
