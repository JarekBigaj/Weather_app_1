const buttonWarsaw = document.querySelector("#Warsaw");
const buttonKrakow = document.querySelector("#Krakow");
const buttonMarcowka = document.querySelector("#Marcowka");

buttonKrakow.addEventListener('click', function(){
    document.getElementById("temp_change").innerHTML = "30";
    document.getElementById("wind_speed").innerHTML = "15";
    document.getElementById("city").innerHTML = "Kraków";
})

buttonWarsaw.addEventListener('click', function(){
    document.getElementById("temp_change").innerHTML = "20";
    document.getElementById("wind_speed").innerHTML = "23";
    document.getElementById("city").innerHTML = "Warszawa";
})

buttonMarcowka.addEventListener('click', function(){
    document.getElementById("temp_change").innerHTML = "28";
    document.getElementById("wind_speed").innerHTML = "19";
    document.getElementById("city").innerHTML = "Marcówka";
})

