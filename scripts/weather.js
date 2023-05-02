const directions1 = ["СВ", "ЮВ", "ЮЗ", "СЗ"];
const light1 = ["солнечно", "пасмурно", "туманно", "шторм", "буря", "бриз", "шквал", "обледенение", "метель", "мгла", "облачно"];

function directions(){
    return Math.floor(Math.random() * directions1.length);    
}

function light(){
    return Math.floor(Math.random() * light1.length);
}

function humidity(min, max){
    return Math.floor(Math.random() * (max - min + 1));
}

function force(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  



function weather(){
    let weatherText = "Завтра будет " + light1[light()] + ". Направление ветра будет " + directions1[directions()] + ", сила ветра будет " + force(10, 100) + "мс. Влажность будет " + humidity(10, 100) + "%";
    document.getElementById('text').textContent = weatherText;
}

