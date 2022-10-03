let users = ["khan","naeem","shaheen","amjad","admin"];
let name = "khan"

for(i in users){
    if(name==users[i]& name=="admin"){
        console.log("hello admin would like to look at the report");
        break;
    }
    else if(name==users[i])
        {
            console.log("hello mr."+users[i]);
            break;
        }
}