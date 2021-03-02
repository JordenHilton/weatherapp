const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody = document.querySelector(".card-body");
const timeImage = document.querySelector(".card-top img");
const cardInfo = document.querySelector(".back-card");

const spitOutFahrenheit = (kelvin) => {
  fahrenheit = Math.round((kelvin - 273.15) * 1.8) + 32;
  return fahrenheit;
};
const isDayTime = (icon) => {
  if (icon.includes("d")) {
    return true;
  } else {
    return false;
  }
};

updateWeatherApp = (city) => {
  console.log(city);
  const imageName = city.weather[0].icon;
  const iconSrc = `http://openweathermap.org/im/wn/${imageName}.png`;
  cityName.textContent = city.name;
  cardBody.innerHTML = `
  <div class="card-body">
          <div class="card-mid row">
            <div class="col-8 text-center temp">
              <span>${spitOutFahrenheit(city.main.temp)}&deg;F</span>
            </div>
            <div class="col-4 condition-temp">
              <p class="condition">${city.weather[0].description}</p>
              <p class="high">${spitOutFahrenheit(city.main.temp_max)}&deg;F</p>
              <p class="low">${spitOutFahrenheit(city.main.temp_min)}&deg;F</p>
            </div>
          </div>

          <div class="icon-container card shadow mx-auto">
            <img src="${iconSrc}" alt="" />
          </div>

          <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
              <p>${spitOutFahrenheit(city.main.feels_like)}&deg;F</p>
              <span>Feels Like</span>
            </div>
            <div class="col text-center">
              <p>${city.main.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          `;
  if (isDayTime(imageName)) {
    console.log("Day");
    timeImage.setAttribute("src", "img/sunny.svg");
    if (cityName.classList.contains("text-black")) {
      cityName.classList.add("text-black");
    } else {
      cityName.classList.add("text-black");
    }
  } else {
    console.log("Night");
    timeImage.setAttribute("src", "img/half-moon.svg");
    if (cityName.classList.contains("text-white"))
      cityName.classList.add("text-white");
  }
};

// Add an event listener to the form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const citySearched = cityValue.value.trim();
  console.log(citySearched);
  searchForm.reset();

  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch((error) => {
      console.log(error);
    });

  cardInfo.classList.remove("d-none");
});
