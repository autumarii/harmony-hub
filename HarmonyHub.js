// =====================================
// HARMONY HUB ALBUM DATABASE
// =====================================


const albums = [

    {
        artist: "Yeonjun",
        album: "NO LABELS: PART 1",
        cover: "yeonjun_no_labels_1.jpg",
        genre: "K-Pop / Hip-Hop",
        release: "2024",
        slogan: "Music without limits.",
        description: "Yeonjun's solo project showing his personal identity and artistic style.",
        spotifyRank: "K-Pop Charts",
        topSong: "GGUM"
    },

    {
        artist: "Yeonjun",
        album: "NO LABELS: PART 2",
        cover: "yeonjun_no_labels_2.jpg",
        genre: "K-Pop / Hip-Hop",
        release: "2025",
        slogan: "A new chapter without boundaries.",
        description: "The continuation of Yeonjun's personal musical journey.",
        spotifyRank: "K-Pop Charts",
        topSong: "TBA"
    },


    {
        artist: "ATEEZ",
        album: "Golden Hour : Part.1",
        cover: "golden_hour_1.jpg",
        genre: "K-Pop",
        release: "2024",
        slogan: "A moment that shines forever.",
        description: "ATEEZ begins their Golden Hour era with powerful performances and energetic tracks.",
        spotifyRank: "Spotify Global K-Pop Charts",
        topSong: "WORK"
    },


    {
        artist: "ATEEZ",
        album: "Golden Hour : Part.2",
        cover: "golden_hour_2.jpg",
        genre: "K-Pop",
        release: "2024",
        slogan: "The golden story continues.",
        description: "ATEEZ expands their sound with new concepts and performances.",
        spotifyRank: "Spotify Charts",
        topSong: "Ice On My Teeth"
    },


    {
        artist: "Vernon & The8",
        album: "V8",
        cover: "v8.jpg",
        genre: "K-Pop",
        release: "2025",
        slogan: "Two perspectives. One sound.",
        description: "A creative collaboration between two SEVENTEEN members.",
        spotifyRank: "K-Pop Charts",
        topSong: "singasong"
    },


    {
        artist: "SEVENTEEN",
        album: "Heng:garae",
        cover: "henggarae.jpg",
        genre: "K-Pop",
        release: "2020",
        slogan: "A journey toward your dreams.",
        description: "A youthful album about growth, courage, and moving forward.",
        spotifyRank: "Global K-Pop Albums",
        topSong: "Left & Right"
    },


    {
        artist: "ENHYPEN",
        album: "Romance : Untold",
        cover: "romance_untold.jpg",
        genre: "K-Pop",
        release: "2024",
        slogan: "A new story of love begins.",
        description: "ENHYPEN explores romance, emotions, and powerful performances.",
        spotifyRank: "#1 Global K-Pop Album",
        topSong: "XO"
    },


    {
        artist: "BABYMONSTER",
        album: "FOREVER",
        cover: "forever.jpg",
        genre: "K-Pop",
        release: "2024",
        slogan: "A new generation begins.",
        description: "BABYMONSTER showcases strong vocals and performance ability.",
        spotifyRank: "Global K-Pop Charts",
        topSong: "FOREVER"
    },



    // Similar albums

    {
        artist: "ATEEZ",
        album: "The World EP.2 : OUTLAW",
        cover: "outlaw.jpg",
        genre: "K-Pop",
        release: "2023",
        slogan: "Breaking every rule.",
        description: "A powerful release filled with intense performances.",
        spotifyRank: "Top K-Pop Albums",
        topSong: "BOUNCY"
    },


    {
        artist: "SEVENTEEN",
        album: "FML",
        cover: "fml.jpg",
        genre: "K-Pop",
        release: "2023",
        slogan: "Finding strength in challenges.",
        description: "One of SEVENTEEN's biggest selling albums.",
        spotifyRank: "Best Selling K-Pop Albums",
        topSong: "Super"
    },


    {
        artist: "ENHYPEN",
        album: "Dark Blood",
        cover: "dark_blood.jpg",
        genre: "K-Pop",
        release: "2023",
        slogan: "A darker story unfolds.",
        description: "An album inspired by fantasy and emotional storytelling.",
        spotifyRank: "Spotify Global Charts",
        topSong: "Bite Me"
    },


    {
        artist: "Stray Kids",
        album: "5-STAR",
        cover: "5star.jpg",
        genre: "K-Pop",
        release: "2023",
        slogan: "Creating their own universe.",
        description: "A powerful album showing Stray Kids' unique sound.",
        spotifyRank: "Billboard Charts",
        topSong: "S-Class"
    },


    {
        artist: "TXT",
        album: "The Name Chapter: TEMPTATION",
        cover: "temptation.jpg",
        genre: "K-Pop",
        release: "2023",
        slogan: "Dreams and reality collide.",
        description: "A fantasy inspired album about youth.",
        spotifyRank: "Global K-Pop Charts",
        topSong: "Sugar Rush Ride"
    },


    {
        artist: "NewJeans",
        album: "Get Up",
        cover: "get_up.jpg",
        genre: "Pop",
        release: "2023",
        slogan: "Fresh sounds for a new era.",
        description: "A short but influential pop album.",
        spotifyRank: "Spotify Global Charts",
        topSong: "Super Shy"
    }

];




// =====================================
// OWNED ALBUM SYSTEM
// =====================================


let ownedAlbums =
    JSON.parse(localStorage.getItem("ownedAlbums")) || [];



function toggleOwned(index) {


    if (ownedAlbums.includes(index)) {

        ownedAlbums =
            ownedAlbums.filter(i => i !== index);

    }

    else {

        ownedAlbums.push(index);

    }


    localStorage.setItem(
        "ownedAlbums",
        JSON.stringify(ownedAlbums)
    );

}






// =====================================
// CREATE ALBUM CARD
// =====================================


function createAlbumCard(album, index) {


    let checked =
        ownedAlbums.includes(index)
            ? "checked"
            : "";



    return `


<div class="album-card">


<div class="cover">


<input 
type="checkbox"
${checked}
onclick="event.stopPropagation(); toggleOwned(${index})">


<img src="${album.cover}">


</div>



<p>

<a onclick="artistPopup('${album.artist}')">

${album.artist}

</a>

</p>



<p>

<a onclick="albumPopup(${index})">

${album.album}

</a>

</p>


</div>


`;

}




// =====================================
// LOAD ALBUMS
// =====================================


function loadAlbums() {


    let top =
        albums.slice(0, 8);


    document.getElementById("slides").innerHTML = `


<div class="slide">

${top.slice(0, 4)
            .map((a, i) => createAlbumCard(a, i))
            .join("")}

</div>



<div class="slide">

${top.slice(4, 8)
            .map((a, i) => createAlbumCard(a, i))
            .join("")}

</div>


`;



    document.getElementById("similarAlbums").innerHTML =

        albums.map((a, i) =>
            createAlbumCard(a, i)
        )
            .join("");

}


loadAlbums();






// =====================================
// POPUPS
// =====================================


function albumPopup(index) {


    let a = albums[index];


    document.getElementById("popupContent").innerHTML = `


<img src="${a.cover}" width="250">


<h2>${a.album}</h2>

<h3>${a.artist}</h3>


<p><b>Genre:</b> ${a.genre}</p>

<p><b>Release Date:</b> ${a.release}</p>


<p>
<b>${a.slogan}</b>
</p>


<p>${a.description}</p>


<p>
<b>Spotify Ranking:</b>
${a.spotifyRank}
</p>


<p>
<b>Most Listened Song:</b>
${a.topSong}
</p>


`;


    document.getElementById("popup").style.display = "flex";


}




function artistPopup(name) {


    let artistAlbums =
        albums
            .filter(a => a.artist === name)
            .map(a => a.album)
            .join("<br>");



    document.getElementById("popupContent").innerHTML = `


<h2>${name}</h2>


<h3>Albums:</h3>

<p>${artistAlbums}</p>


`;


    document.getElementById("popup").style.display = "flex";


}





function closePopup() {

    document.getElementById("popup").style.display = "none";

}






// =====================================
// SLIDER
// =====================================


let slidePosition = 0;


function changeSlide(direction) {


    slidePosition += direction;


    if (slidePosition < 0)
        slidePosition = 1;


    if (slidePosition > 1)
        slidePosition = 0;



    document.getElementById("slides").style.transform =
        `translateX(-${slidePosition * 100}%)`;

}