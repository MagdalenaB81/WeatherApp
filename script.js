function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = response.data.temperature.current;

  
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  cityElement.innerHTML = response.data.city;
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


searchCity("Barcelona");