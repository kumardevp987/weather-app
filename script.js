var city,flag;

function search(){
  console.log("FUNCTION CALLED !")
  city = document.getElementById('city-input');
  flag = document.getElementById('flag');
  searchCity();
}




showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name
    document.getElementById("weather-type").innerText = weatherData.weather[0].main
    document.getElementById("temp").innerText = (weatherData.main.temp)
    document.getElementById("min-temp").innerText =( weatherData.main.temp_min)
    document.getElementById("max-temp").innerText = ( weatherData.main.temp_max)


  }
  
  
async function searchCity(){
      console.log("FETCHING");
     let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=71f6779186cc32448b4c412eea65b982&units=metric`)
     let data=await response.json()
     console.log(data);
     showWeatherData(data)
}
