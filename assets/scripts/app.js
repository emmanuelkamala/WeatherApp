const weather = new Weather('Boston');


document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));

}
