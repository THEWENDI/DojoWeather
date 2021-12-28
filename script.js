function weatheraler(element){
    alert("Loading weather report...");
}


function removethis(){
    var cookies = document.querySelector("#removecookie");
    cookies.remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element){
    console.log(element.value);
    for(var i = 1; i < 9 ; i++){
        var tempspan = document.querySelector("#temp" + i);
        var tempval = parseInt(tempspan.innerText);
        if(element.value == "°C"){
            tempspan.innerText = f2c(tempval);
        }else{
            tempspan.innerText = c2f(tempval);
        }
    }
}
