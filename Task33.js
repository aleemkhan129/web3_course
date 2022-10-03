let array = [1,2,3,4,5,6,7,8,9];

for(i in array){
    if(array[i]==1)
        console.log(array[i]+"st");
    else if(array[i]==2)
        console.log(array[i]+"nd");
    else if(array[i]==3)
        console.log(array[i]+"rd");
    else if(array[i]>=4 & array[i]<=9)
        console.log(array[i]+"th");
        
}