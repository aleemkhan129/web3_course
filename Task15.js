let friends = ["junaid","hamza","yasir"];

for(i in friends){
    console.log(friends[i]+" you are invited to dinner it will be my pleasure to have you");
}
console.log("\nmr. "+friends[1]+" will not be able to attend the dinner\n");

friends[1]= "ahmad";
for(i in friends){
    console.log(friends[i]+" you are invited to dinner it will be my pleasure to have you");
}