const weather = new Weather('Boston');
const ui = new UI;


document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    
    weather.changeLocation('Miami');

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
