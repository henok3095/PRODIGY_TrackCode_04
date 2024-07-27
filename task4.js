document.getElementById('searchButton').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0a14428373b5ebaee747177a460ca45e'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temp').textContent = data.main.temp + ' °C';
            document.getElementById('desc').textContent = data.weather[0].description;
            document.getElementById('humidity').textContent = data.main.humidity + ' %';
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert("City not found. Please enter a valid city name.");
        });
}
