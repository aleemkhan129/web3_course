let friends = ["junaid","hamza","yasir"];

for(i in friends){
    console.log(friends[i]+" you are invited to dinner it will be my pleasure to have you");
}
console.log("\nmr. "+friends[1]+" will not be able to attend the dinner\n");

friends[1]= "ahmad";
for(i in friends){
    console.log(friends[i]+" you are invited to dinner it will be my pleasure to have you");
}

console.log("\nthere will be some guests\n");
friends.unshift("naeem");
friends.push("shah");
friends.push("iftekhar");
console.log(friends);


console.log("\n i can only invite two people\n");

friends = friends.slice(0,2);

console.log(friends+" you both are still in the list");