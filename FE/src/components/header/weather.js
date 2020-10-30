const apiKey = "9dgnxA2poZGRVjY1GgqU28eNAea8zlFr";

const getWeather = async (loc_id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${loc_id}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0]
}

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

export const updateCity = async (city) => {
  // can call functions here due to cascading order of app.js and forecast.js scripts
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  console.log( cityDetails, weather )
  return { cityDetails, weather };
};



// const submitWeather = (e) => {
//   e.preventDefault();

//   // get cvalue from input (city) in form
//   const city = cityForm.city.value.trim();

//   cityForm.reset();

//   updateCity(city)
//     .then((data) => updateUI(data))
//     .catch((err) => console.log(err));

//   // set localStorage
//   localStorage.setItem("loc", city);
// };
