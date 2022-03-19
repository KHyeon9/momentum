const API_KEY = "f68414f6f3835b7b4e15a6303a4bfa92";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const weatherIcon = document.querySelector(".icon");
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weather.innerText = `${data.weather[0].main} | ${data.main.temp} °C | ${data.name}`;
      weatherIcon.setAttribute("src", weatherIconAdrs);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
