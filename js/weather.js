const API_KEY = "2ca144e0bb0cb5949327226eed7c036a";

function getWeatherPositive(locationInfo) {
    const lat = locationInfo.coords.latitude;
    const lon = locationInfo.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather");
        const city = document.querySelector("#city");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`
        city.innerText = data.name;
    });
}

function getWeatherNegative() {
    alert("Need your permission to show weather and city!");
}

navigator.geolocation.getCurrentPosition(getWeatherPositive, getWeatherNegative);