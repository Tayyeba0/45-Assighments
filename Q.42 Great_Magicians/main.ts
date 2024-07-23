// Q.40 Album make album function
type talbum = {name : string , album : string , track_num?: number}

function make_album(artist_name: string , album_title : string , track? : number):talbum{
    let album:talbum = {
        name: artist_name,
        album: album_title,
    }

   if(track! == undefined){
            album.track_num = track

        
   }

    return album
}   
console.log(make_album("atif", "doorie"));
console.log(make_album("linkin park" , "linkin park album"));
console.log(make_album("ali zafar", "ali zafar album", 10));

