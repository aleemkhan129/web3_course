function city_country(city,country){
    return '"'+city+', '+country+'"';
}

let city1 = city_country("peshawar","pakistan");
let city2 = city_country("lahore","pakistan");
let city3 = city_country("london","UK");
console.log(city1);
console.log(city2);
console.log(city3);