const apiKey = "1028dd6f8619f91450f357dd38c506f1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const cityNameElement = document.getElementById("cityName");
const cityTemperatureElement = document.getElementById("cityTemperature");
const weatherDescriptionElement = document.getElementById("weatherDescription");

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityNameElement.textContent = data.name;
      cityTemperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescriptionElement.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
