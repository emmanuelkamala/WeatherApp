class Weather {
  constructor(city){
      this.apiKey = "9c5eb41fc25cd5dcdd581304f1108308";
      this.city = city;
  }

  async getWeather(){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)

      const responseData = await response.json();

      return responseData
  }

  changeLocation(city) {
     this.city = city;
  }
}