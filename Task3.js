let name = "imran ahmad khan niazi";
let newName = name.split(" ");
name = "";
for(i in newName){
    let naya = newName[i].replace(newName[i][0],newName[i][0].toUpperCase());
    name = name.concat(naya).concat(" ");
}
console.log(name);