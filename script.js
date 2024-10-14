function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let temperature = response.data.temperature.current;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  temperatureElement.innerHTML = response.data.temperature.current;
  
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);

  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = "${response.data.temperature.humidity}%";
  windSpeedElement.innerHTML = "${response.data.wind.speed}km/h";
  timeElement.innerHTML = "${date.getDay()} ${date.getHours()}:${date.getMinutes()}";
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
} 

function searchCity(city) {
  let apiKey = "9a5aabc4e027cb0ac43o63ce8c4fb0t3";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios
    .get(apiUrl)
    .then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);




