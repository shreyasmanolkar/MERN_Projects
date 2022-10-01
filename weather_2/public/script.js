const weatherDisplay = document.querySelector('.weather');
const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');

const fetchWeather = async (city) => {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3cdace1ffe2524666d09d1b2c050f90`;

    const res = await fetch(url)
    const data = await res.json();

    if(data.cod === '404'){
        alert('City not found');
        return;
    }

    if(data.cod === '401'){
        alert('Invalid API key');
        return;
    }

    const displayData = {
        city: data.name,
        temp: kelvinToFahrenheit(data.main.temp),
    }

    addWeatheToDOM(displayData);
};

const addWeatheToDOM = (data) => {
    weatherDisplay.innerHTML = `
        <h1>Weather in ${data.city}</h1>
        <h2>${data.temp} &deg;F</h2>
    `
    cityInput.value = ''
};

const kelvinToFahrenheit = (temp) => {
    return Math.ceil(((temp - 273.15) * 9) / 5 + 32)
};

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(cityInput.value === ''){
        alert('Please enter a city')
    } else {
        fetchWeather(cityInput.value)
    }
});

fetchWeather('Pune');