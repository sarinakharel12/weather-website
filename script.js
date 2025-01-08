 const btn=document.querySelector(".btn")
 const cityInput=document.querySelector("#city")
 const temp =document.querySelector("#temp-div")


btn.addEventListener(  "click",async function(){
let city = cityInput.value;



const weatherInfo= await getWeatherInfo(city)

// console.log(city)
// temp.innerHTML=city
// console.log(weatherInfo.main.temp)
temp.innerHTML=weatherInfo.main.temp

})

 async function  getWeatherInfo(city)
    
 {
    const apiKey="05bb0e85cd95a7a2cb2c558e00a6056a";
    const  apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    
    const response= await fetch(apiUrl);
    const data = await response.json()
    return data; //return the fetched data

   
    
}




 

