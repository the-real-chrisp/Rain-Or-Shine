const weatherInfo = document.getElementById('weatherInfo');
const generateWeatherButton = document.getElementById('btn');

generateWeatherButton.addEventListener("click", function () {
    const city = document.getElementById('cityInput').value;
    const cityList = !!localStorage.getItem('City') ? JSON.parse(localStorage.getItem('City')) : [];
    cityList.unshift(city)
    localStorage.setItem('City', JSON.stringify(cityList))
    
    latLongConvert();
});

async function latLongConvert() {
    const cityToConvert = await JSON.parse(localStorage.getItem('City'))[0];

    const apiKey = "bfae21eab457fc78c9e3e8a208a66ee6";
    const queryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityToConvert},US&appid=${apiKey}`;

    const response = await fetch(queryUrl);
    const result = await response.json();
    
    localStorage.setItem('Lat', JSON.stringify(result[0].lat))
    localStorage.setItem('Long', JSON.stringify(result[0].lon))
}

// async function getWeatherData {
//     const response = await fetch("")
// }
