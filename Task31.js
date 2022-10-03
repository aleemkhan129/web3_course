let users = ["khan","amjad","admin","naeem","manzoor"];
let name = "khan"

if (users.length == 0) {
    console.log("there are no users");
}
else {

    for (i in users) {
        if (users.length == 0) {
            console.log("we need to find users");
            break;
        }
        else if (name == users[i] & name == "admin") {
            console.log("hello admin would like to look at the report");
            break;
        }
        else if (name == users[i]) {
            console.log("hello mr." + users[i]);
            break;
        }
        cnt++;
    }

}