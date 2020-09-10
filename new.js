function searchCity(city) {
  let apiKey = "ec06d235bef96da76099cc59883b0146";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec06d235bef96da76099cc59883b0146&units=metric`;
  axios.get(`${apiUrl}`).then(showTemp);
}

function searchEngine(event) {
  event.preventDefault();
  let input = document.querySelector("#searchEngine");
  console.log(input.value);
  let h1 = document.querySelector("h1");
  if (input.value) {
    searchCity(input.value);
  } else {
    h1.innerHTML = null;
    h1.innerHTML = `Please type a city name`;
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", searchEngine);

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", searchEngine);

function showTemp(response) {
  console.log(response.data);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${response.data.name}`;
  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("#temp");
  h2.innerHTML = `${temperature}°C`;
  let humidity = document.querySelector("#humid");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind Speed: ${response.data.wind.speed} mph`;
}
searchCity("London");
