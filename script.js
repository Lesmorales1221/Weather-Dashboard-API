let weather = {
    apiKey:"4fcf46f041c775cd5f30267cce8d41cb    ",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ) .then((response)=> response.json())
            .then((data)=> console.log(data));
    },
};