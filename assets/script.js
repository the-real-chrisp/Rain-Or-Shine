const weatherInfo = document.getElementById('weatherInfo');
const generateWeatherButton = document.getElementById('btn');

generateWeatherButton.addEventListener("click", function () {
    const city = document.getElementById('cityInput').value;
    const cityList = !!localStorage.getItem('City') ? JSON.parse(localStorage.getItem('City')) : [];
    cityList.unshift(city)
    localStorage.setItem('City', JSON.stringify(cityList))
});

