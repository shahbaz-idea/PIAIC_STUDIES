"use strict";
function make_album(artist, title, tracks) {
    let album = {
        "artist": artist,
        "title": title
    };
    if (tracks) {
        album = {
            "artist": artist,
            "title": title,
            "tracks": tracks
        };
    }
    return album;
}
let album1 = make_album("Adil", "21");
let album2 = make_album("Atif", "1989", 16);
let album3 = make_album("Arif", "Show", 16);
console.log(album1);
console.log(album2);
console.log(album3);
