function arraySort(array){
    let newAr = [...array];
    return newAr.sort();
}
function arrayReverse(array){
    let newAr = [...array];
    return newAr.reverse();
}

let locations = ["karachi","lahore","peshawar","isalamabad"];
console.log("\nsorting\n");
console.log("original array :"+locations);
console.log("sorted array :"+arraySort(locations));
console.log("original array :"+locations);

console.log("\nreverse order\n");
console.log("reservse order :"+arrayReverse(locations));
console.log("original array :"+locations);


console.log("\nperemannent reverse\n");
console.log("reversed :"+locations.reverse());
console.log("reversing back :"+locations.reverse());