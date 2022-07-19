let weather = {
    apiKey:"4fcf46f041c775cd5f30267cce8d41cb    ",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ) .then((response)=> response.json())
            .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather [0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")
    
    },

    search:function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

};

document.querySelector(".search").addEventListener("click", function() {
    weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Indianapols");