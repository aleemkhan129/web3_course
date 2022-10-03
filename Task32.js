function match(item,array){
    let indicator = false;
     array.forEach(element => {
        if(element ==item)
            {
                indicator=true;
            }
    });
    return indicator;
}

let current_users = ["khan","amjad","naeem","john"];
let new_users = ["juniad","khan","john"];

new_users.forEach(element=>{
    if(match(element,current_users))
    {
        console.log(element+" username is already taken");
    }
    else
        console.log(element+" is availbe to use");
})

