function make_album(name,title,tracks=0){
    let album = { name: name, title: title,tracks:tracks };
    return album;
}

let album =[];
album.push(make_album("atif aslam","teri dua",12));
album.push(make_album("ar rahman","tera deedar",3));
console.log(album);