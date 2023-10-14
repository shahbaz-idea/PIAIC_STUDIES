function make_album(artist: string, title: string, tracks?: number): object {
    let album: object = {
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

let album1: object = make_album("Adil", "21");
let album2: object = make_album("Atif", "1989", 16);
let album3: object = make_album("Arif", "Show", 16);

console.log(album1);
console.log(album2);
console.log(album3);
