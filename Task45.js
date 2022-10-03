function make_car(manufacturer,model,...options){
    let car ={manufacturer:manufacturer,model:model,...options};
    return car;
}

let cars = make_car("toyota",2001,colo="red",automatic=true);
console.log(cars);