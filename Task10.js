//this program take tring and convert it into tittle case

let name = "imran ahmad khan niazi";
let newName = name.split(" ");
name = "";
for(i in newName){
    let naya = newName[i].replace(newName[i][0],newName[i][0].toUpperCase());
    name = name.concat(naya).concat(" ");
}
console.log(name);

//this program takestring and all the blank space are removed
let anyString = "   \t \n khan   ";

console.log(anyString);
anyString = anyString.trim()
console.log(anyString);