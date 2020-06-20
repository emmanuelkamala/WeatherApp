class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.stringTwo = document.getElementById('w-string-two');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${(weather.main.temp - 273.15).toFixed(2)} °C`;
        this.stringTwo.textContent = `${(((weather.main.temp - 273.15) * 9/5) + 32).toFixed(2)} °F`;
        this.icon.setAttribute('src', "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind: ${weather.wind.deg}`;
    } 
}

export default UI;