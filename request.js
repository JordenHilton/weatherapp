const key = "1acf15ad3396ec27eb67e680761e0a53";

// const baseURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=1acf15ad3396ec27eb67e680761e0a53";

// fetch(baseURL).then((data) => {
//   console.log("response", data.json()).catch((error) => {
//     console.log(error);
//   });
// });

const requestCity = async (city) => {
  const baseURL = "http://api.openweathermap.org/data/2.5/weather";

  const query = `?q=${city}&appid=${key}`;

  //make fetch call (promise call)

  const response = await fetch(baseURL + query);

  //promise date
  const data = await response.json();
  return data;
};
