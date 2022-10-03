function show_magicians(magicians){
    for(i in magicians)
        console.log(magicians[i]);
}
function make_great(magicians){
    for(i in magicians){
        magicians[i]= magicians[i].concat(" the great");
    }
}


let magicians = ["jason","jeen","jeva"];
make_great(magicians);
show_magicians(magicians);

