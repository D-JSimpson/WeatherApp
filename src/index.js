import "./style.css";

// Gets Weather Info From API
async function fetchWeatherInfo(location) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=81221ce6140543e0ab120827231908&q=${location}&days=3&aqi=no&alerts=no`;
  try {
    const weather = await fetch(url, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const json = await weather.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
  console.log(location);
}

const searchBar = document.querySelector("#search-bar");
searchBar.classList.add("border");

// When User Presses Enter, Get Weather Info From API
searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    fetchWeatherInfo(searchBar.value);
    searchBar.value = "";
  }
});
