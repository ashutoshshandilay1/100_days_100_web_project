const searchinp = document.getElementById('searchinp');
const searchbtn = document.getElementById('searchbtn');
const cname = document.getElementById('cname');
const temp = document.getElementById('temp');
const countryName = document.getElementById('countryName');
const condition = document.getElementById('condition');
const Humidity = document.getElementById('Humidity');
const lat = document.getElementById('lat');
const localtime = document.getElementById('localtime');
const region = document.getElementById('region');


async function weatherData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=539494ec17794caba5a140903242112 &q=${cityName}&aqi=yes`);
    return await promise.json();
}


searchbtn.addEventListener('click', async () => {
   const city  = searchinp.value;
   const result = await weatherData(city);
   cname.textContent = `Name: ${result.location.name}`
   temp.textContent = `Temperature: ${result.current.temp_c}`
   countryName.textContent = `Country Name: ${result.location.country}`
   condition.textContent = `Condition: ${result.location.name}`
   Humidity.textContent = `Humidity: ${result.current.humidity}`
   lat.textContent = `Latitude: ${result.location.lat}`
   localtime.textContent = `Local Time: ${result.location.localtime}`
   region.textContent = `Region: ${result.location.region}`



})