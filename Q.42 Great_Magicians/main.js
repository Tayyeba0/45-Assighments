"use strict";
function make_album(artist_name, album_title, track) {
    let album = {
        name: artist_name,
        album: album_title,
    };
    if (track == undefined) {
        album.track_num = track;
    }
    return album;
}
console.log(make_album("atif", "doorie"));
console.log(make_album("linkin park", "linkin park album"));
console.log(make_album("ali zafar", "ali zafar album", 10));
