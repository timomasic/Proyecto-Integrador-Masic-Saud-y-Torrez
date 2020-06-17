window.addEventListener ("load", function()  {  
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/")
    .then(
        function (respuesta){
            return respuesta.json();
        }  
    )
    .then(
        function(information) {
            let track = document.querySelector ("li .track-item") 
            let trackList = information.tracks.data;
            for (let i = 0; i < trackList.length; i++) {
                console.log(trackList);
                let trackId = trackList[i].id;
                let trackTitle = trackList[i].title_short;
                let trackArtist = trackList[i].artist.name;
                let trackArtistId = trackList[i].artist.id;
                let trackImage = trackList[i].album.cover_xl;
                let trackItem = `
                <li class="track-item">
                    <div class="ocultar" class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <a href="album.html?idalbum=` + trackId + `">  <img class= "foto" src="` + trackImage + `" alt=""> </a>
                        </div>
                        <div class="uk-card-body">
                            <a href="album.html?idalbum=" > <h3 class="uk-card-title">` + trackTitle + `<h3></a>
                        </div>
                    </div>
                </li>
                `
                document.querySelector(".trackList").innerHTML += trackItem;
            }
        }
    )
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
    .then(
        function(respuestas){
            return respuestas.json();  
        })
    .then(function(information){
            let artist = document.querySelector ("li.topArtist")
            console.log (information)
            let topArtist = information.data;
            for (let i = 0; i< topArtist.length; i++){
                let artistId = topArtist[i].id;
                let artistName = topArtist[i].name;
                let artistPic = topArtist[i].picture_xl;
                let artistItem = `<li>
                    <div class="ocultar" class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                        <a href="artist.html?idartist=`+artistId+`">  <img class= "foto" src="` + artistPic + `" alt=""> </a>
                    </div>
                    <div class="uk-card-body artist-body-card">
                        <a href="artist.html?idartist="` +artistId+ `"><h3>` + artistName + `</h3></a>
                    </div>
                </li>`    
             ;
             document.querySelector("#topArtist").innerHTML += artistItem;
             }
        }
    )
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
    .then(
        function(respuestas){
            return respuestas.json();
        })
    .then(function(information){
            let tracks = document.querySelector("li.topTracks")
            console.log(information)
            let topTrack = information.data;
            for (let i = 0; i< topTrack.length; i++){
                console.log("hola");
                let trackId = topTrack[i].id;
                let trackName = topTrack[i].title;
                let trackPic = topTrack[i].album.cover_xl;
                let video = topTrack[i].preview;
                let trackItem = `<a class="despintar" href="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"><article class= "cancion"> `+ "1"+`<i class="far fa-heart">`+trackName+`</i><i><i class="fa fa-play-circle fa-2x" aria-hidden="true"></i><i> </article class= "cancion"></a>`
            document.querySelector("#topTrack").innerHTML += trackItem;
            }
        }
    )
})
//let trackImage = trackList[i].album.cover_xl;
//top-tracks.html?trackId=` + trackId + `
//`+trackId+`
