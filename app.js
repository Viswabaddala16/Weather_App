const BASE_URL = "api.openweathermap.org";

const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind-speed");
const cityNameDisplay = document.getElementById("city-name");
const tempElement = document.getElementById("temp");


async function fetchWeather(city){

    try{
        const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`);
        
        if(!response.ok){
            throw new Error("City is not Found");
        }
        const data = await response.json();
        updateUI(data);
    }
    catch(error){
        alert(error.message);
        console.error("Error",error);
    }
}
function updateUI(data){
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    cityNameDisplay.textContent = `${data.name}`;
    windElement.textContent = `${data.wind.speed} km/h Wind`;
    humidityElement.textContent = `${data.main.humidity}% Humidity`

    console.log("current Weather ",data);
}
weatherForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    if(city){
        fetchWeather(city);
    }
})