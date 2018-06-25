$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("#load-songs");
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list");

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
   loadSongs.click(()=>{    
       $.ajax({
            url:"songs.json",
            datatype:"json",
            type:"get",
            cache:"true",
            success:function(data){
                console.log("data",data)
        // console.log("data",data[0].album)
        // console.log(`${data.value}`)
                console.log("data songs", data.songs)

                    for(let songs in data){
                        data[songs].forEach(element => {
                        console.log("element",element)
                        const songSection = $("<section>").addClass("song");
            
                        const titleH1 = $("<h1>").addClass("song_title").text(`${element.title}`)
            
                        const descriptSection = $("<section>").addClass("song_description").text(`Performed by ${element.artist} on the album ${element.album}`)
            
            //appends
                        $(descriptSection).appendTo(titleH1);
                        $(titleH1).appendTo(songSection);
                        $(songSection).appendTo(songList);
          });
    }
    }
})}
)
    

    /*
    Chain a `.then()` method to the ajax call, and when
    it is complete build a DOM component for each song with
    the following structure. Use the jQuery append() method
    to put an HTML representation of each song the DOM as a
    child component of the .*/


    /*
                <section class="song">
                    <h1 class="song__title">{Title of song}</h1>
                    <section class="song__description">
                        Performed by {artist} on the album {album}
                    </section>
                </section>
        */

    
})