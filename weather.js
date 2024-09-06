const apikey="4f9b32bc319235f9c909870c56ae9228";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response=await fetch(apiurl +city+`&appid=${apikey}`)

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

    console.log("Your data: ",data)

    //From this point, look at the API response because the values such as data.name, data.main.temp are all visible in the API.

    //API response for city='Noida'
    // {
    //     "coord": {
    //         "lon": 77.33,
    //         "lat": 28.58
    //     },
    //     "weather": [
    //         {
    //             "id": 802,
    //             "main": "Clouds",
    //             "description": "scattered clouds",
    //             "icon": "03n"
    //         }
    //     ],
    //     "base": "stations",
    //     "main": {
    //         "temp": 32.16,
    //         "feels_like": 33.5,
    //         "temp_min": 32.16,
    //         "temp_max": 32.16,
    //         "pressure": 999,
    //         "humidity": 45,
    //         "sea_level": 999,
    //         "grnd_level": 977
    //     },
    //     "visibility": 10000,
    //     "wind": {
    //         "speed": 2.61,
    //         "deg": 193,
    //         "gust": 4.04
    //     },
    //     "clouds": {
    //         "all": 29
    //     },
    //     "dt": 1687101208,
    //     "sys": {
    //         "type": 1,
    //         "id": 9165,
    //         "country": "IN",
    //         "sunrise": 1687045975,
    //         "sunset": 1687096228
    //     },
    //     "timezone": 19800,
    //     "id": 7279746,
    //     "name": "Noida",
    //     "cod": 200
    // }
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="Images/cloudy1.jpg"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="Images/sunny1.jpg"
        }
        else if(data.weather[0].main=="Rain"){  
            weatherIcon.src="Images/rain1.jpg"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="Images/drizzle1.jpg"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="Images/cloudy1.jpg"
        }
        document.querySelector(".weather").style.display="block"
    }
}

//Function call
searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    }
)