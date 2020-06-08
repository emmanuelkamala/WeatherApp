class Storage {
    constructor(){
        this.city;
        this.defaultCity = 'Dar es salaam';
    }

    getLocationData(){
        if (localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setLocationData(city){
      localStorage.setItem('city', city);
    }
}