let time = document.getElementById('time');
setInterval(function () {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
  
   
}, 1000);

// setInterval(displayClock);

// function displayClock() {
//     time.innerHTML = new Date().toLocaleTimeString();
//     date.innerHTML = new Date().toLocaleDateString();
// }




let search    =    document.querySelector('#search');
let city      =    document.querySelector('.garowe');
let temp      =    document.querySelector('.temp');
let humidity  =    document.querySelector('.humid');
let wind      =    document.querySelector('.wind');
let weather   =    document.querySelector('.weather');

search.addEventListener('keyup', (e) => {
        if(e.keyCode === 3) {
            getWeather(search.value);
        }
    });




function getWeather(address){
    let Apikey  =  `2185595cc307fea49894a72dd004af2b`;
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${address[0]}&lon=${address[1]}&appid=${Apikey}&units=metric`
    fetch(baseUrl).then(res => res.json()).then(data=>{
        console.log(data);
    })
}

function getLocation_address(cityName){
    let address;
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${cityName}&apiKey=d6d157b813fe4e28a0a7e1d85240804a`;
    fetch(url).then(res => res.json()).then(data=>{
        data.features.map(el=>{
            
            address = [el.bbox[1] , el.bbox[2]]
        })
        getWeather(address)
    })
}

getLocation_address('hargeisa')












