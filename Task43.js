function show_magicians(magicians){
    for(i in magicians)
        console.log(magicians[i]);
}
function make_great(magicians){
    let newMag = [...magicians];
    for(i in newMag){
        newMag[i]= newMag[i].concat(" the great");
    }
    return newMag
}


let magicians = ["jason","jeen","jeva"];
let newmag = make_great(magicians);
console.log("copy of original array\n");
show_magicians(newmag);
console.log("\noriginal array\n");
show_magicians(magicians);
