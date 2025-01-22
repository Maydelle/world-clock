function updateTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("D MMMM, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthTime = moment().tz("Australia/Perth");

  perthDateElement.innerHTML = perthTime.format("D MMMM, YYYY");
  perthTimeElement.innerHTML = perthTime.format("h:mm:ss [<small>]A[</small>]");

  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("D MMMM, YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let buenosairesElement = document.querySelector("#buenos-aires");
  let buenosairesDateElement = buenosairesElement.querySelector(".date");
  let buenosairesTimeElement = buenosairesElement.querySelector(".time");
  let buenosairesTime = moment().tz("America/Argentina/Buenos_Aires");

  buenosairesDateElement.innerHTML = buenosairesTime.format("D MMMM, YYYY");
  buenosairesTimeElement.innerHTML = buenosairesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityDateTime = moment().tz(cityTimezone);

  let citiesElement = document.querySelector("#cities-container");
  citiesElement.innerHTML = `
    <div class="cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityDateTime.format("D MMMM, YYYY")}</div>
      </div>
      <div class="time">${cityDateTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )}</div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-list");
citiesSelectElement.addEventListener("change", updateCity);

document.querySelector("#city-list").addEventListener("change", (event) => {
  updateCity(event);
  setInterval(() => updateCity(event), 1000);
});
