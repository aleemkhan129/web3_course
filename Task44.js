function order(...burger){
    console.log("summary");
    for(i in burger)
        console.log(burger[i]);
}

order("cheeze","chicken",'onion');