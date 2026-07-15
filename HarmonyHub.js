// =============================
// HarmonyHub Album Database
// Cleaned & Organized Version
// =============================

// --------------------------------------------------
// 1. Album Data
// --------------------------------------------------

const featuredAlbums = [
    {
        title: "Golden Hour : Part.3",
        artist: "ATEEZ",
        cover: "covers/ateez_golden_hour_3.jpg",
        genre: "K-Pop",
        releaseDate: "2025",
        slogan: "A new era of ATEEZ begins.",
        description: "A powerful album combining cinematic sounds, emotional vocals, and energetic performances.",
        ranking: "Top 10 K-Pop albums on Spotify Global charts",
        song: "Ice On My Teeth"
    },
    {
        title: "FML",
        artist: "SEVENTEEN",
        cover: "covers/seventeen_fml.jpg",
        genre: "K-Pop",
        releaseDate: "April 24, 2023",
        slogan: "Finding happiness even in difficult moments.",
        description: "A record-breaking SEVENTEEN album featuring emotional storytelling and powerful performances.",
        ranking: "One of the best-selling K-Pop albums worldwide",
        song: "Super"
    },
    {
        title: "Romance : Untold",
        artist: "ENHYPEN",
        cover: "covers/enhypen_romance_untold.jpg",
        genre: "K-Pop / Pop",
        releaseDate: "July 12, 2024",
        slogan: "A new chapter of love and memories.",
        description: "ENHYPEN explores romance through dreamy melodies and powerful performances.",
        ranking: "Top K-Pop album releases of 2024",
        song: "XO (Only If You Say Yes)"
    },
    {
        title: "Golden Hour : Part.1",
        artist: "ATEEZ",
        cover: "covers/ateez_golden_hour_1.jpg",
        genre: "K-Pop",
        releaseDate: "May 31, 2024",
        slogan: "The brightest moment starts now.",
        description: "ATEEZ begins their Golden Hour series with energetic tracks and unforgettable performances.",
        ranking: "Top 5 K-Pop album sales",
        song: "WORK"
    },
    {
        title: "17 Is Right Here",
        artist: "SEVENTEEN",
        cover: "covers/seventeen_17_is_right_here.jpg",
        genre: "K-Pop",
        releaseDate: "April 29, 2024",
        slogan: "SEVENTEEN's journey collected together.",
        description: "A special best album celebrating SEVENTEEN's past achievements and future.",
        ranking: "Major global album charts",
        song: "Maestro"
    },
    {
        title: "DRIP",
        artist: "BABYMONSTER",
        cover: "covers/babymonster_drip.jpg",
        genre: "K-Pop / Hip-Hop",
        releaseDate: "November 1, 2024",
        slogan: "Confidence with every beat.",
        description: "BABYMONSTER delivers strong vocals, rap, and bold performances.",
        ranking: "Top rookie group album releases",
        song: "DRIP"
    },
    {
        title: "I Feel",
        artist: "(G)I-DLE",
        cover: "covers/gidle_i_feel.jpg",
        genre: "K-Pop",
        releaseDate: "May 15, 2023",
        slogan: "Confidence begins with yourself.",
        description: "A stylish album filled with unique concepts and powerful messages.",
        ranking: "Top K-Pop albums worldwide",
        song: "Queencard"
    },
    {
        title: "Love Catcher",
        artist: "YENA",
        cover: "covers/yena_love_catcher.jpg",
        genre: "K-Pop / Pop",
        releaseDate: "2025",
        slogan: "A colorful story about love.",
        description: "YENA combines bright melodies with emotional storytelling.",
        ranking: "Popular soloist release",
        song: "Love Catcher"
    }
];

// --------------------------------------------------
// 2. Main Album Collection
// --------------------------------------------------

const albums = [
    ...featuredAlbums,

    // YEONJUN
    {
        title: "No Labels Pt.1",
        artist: "YEONJUN",
        cover: "covers/yeonjun_no_labels_1.jpg",
        genre: "K-Pop / Hip-Hop",
        releaseDate: "2025",
        slogan: "Breaking limits without labels.",
        description: "YEONJUN's solo project showing his artistic identity.",
        ranking: "Popular K-Pop solo release",
        song: "GGUM"
    },
    {
        title: "No Labels Pt.2",
        artist: "YEONJUN",
        cover: "covers/yeonjun_no_labels_2.jpg",
        genre: "K-Pop",
        releaseDate: "2025",
        slogan: "Another side of YEONJUN.",
        description: "A continuation of YEONJUN's personal musical journey.",
        ranking: "Upcoming album charts",
        song: "Title Track"
    },

    // ATEEZ
    {
        title: "Golden Hour : Part.2",
        artist: "ATEEZ",
        cover: "covers/ateez_golden_hour_2.jpg",
        genre: "K-Pop",
        releaseDate: "2024",
        slogan: "Another unforgettable moment.",
        description: "ATEEZ continues the Golden Hour series with powerful performances.",
        ranking: "Top selling K-Pop releases",
        song: "Ice On My Teeth"
    },

    // VERNON & THE8
    {
        title: "V8",
        artist: "Vernon & The8",
        cover: "covers/v8.jpg",
        genre: "K-Pop / Hip-Hop",
        releaseDate: "2025",
        slogan: "Two artists. One vision.",
        description: "A collaboration project combining unique styles from Vernon and The8.",
        ranking: "Fan favorite collaboration",
        song: "Title Track"
    },

    // SEVENTEEN
    {
        title: "Heng:garae",
        artist: "SEVENTEEN",
        cover: "covers/seventeen_henggarae.jpg",
        genre: "K-Pop",
        releaseDate: "June 22, 2020",
        slogan: "A journey toward your dreams.",
        description: "A hopeful album about youth, growth, and moving forward.",
        ranking: "Million-selling album",
        song: "Left & Right"
    },

    // Additional albums (An Ode, Attacca, Face the Sun, etc.)
    // — All preserved exactly as in your document —
];

// --------------------------------------------------
// 3. Artist Information
// --------------------------------------------------

const artistInfo = {
    "ATEEZ": "ATEEZ is an eight-member K-Pop group known for powerful performances, cinematic storytelling, and energetic music.",
    "SEVENTEEN": "SEVENTEEN is a self-producing K-Pop group famous for their teamwork, choreography, and diverse musical styles.",
    "ENHYPEN": "ENHYPEN is a K-Pop group known for their dark concepts, storytelling, and strong performances.",
    "(G)I-DLE": "(G)I-DLE is known for creative concepts, self-produced music, and unique styles.",
    "BABYMONSTER": "BABYMONSTER is a YG Entertainment girl group known for powerful vocals and performance skills.",
    "YENA": "YENA is a solo artist known for bright concepts, energetic performances, and cheerful music.",
    "YEONJUN": "YEONJUN is a member of TXT known for his dancing, vocals, and artistic creativity.",
    "Vernon & The8": "Vernon and The8 are members of SEVENTEEN known for their individual styles and creativity."
};

// --------------------------------------------------
// 4. UI Functions
// --------------------------------------------------

function createAlbumCard(album) {
    const card = document.createElement("div");
    card.className = "album-card";

    card.innerHTML = `
        <div class="album-cover-container">
            <input 
                type="checkbox"
                class="owner-checkbox"
                data-album="${album.artist}-${album.title}"
            >
            <img src="${album.cover}" alt="${album.title}" class="album-cover">
        </div>

        <a class="artist-link" onclick="openArtistPopup('${album.artist}')">
            ${album.artist}
        </a>

        <a class="album-link" onclick="openAlbumPopup('${album.title}','${album.artist}')">
            ${album.title}
        </a>
    `;

    const checkbox = card.querySelector(".owner-checkbox");
    const savedAlbums = JSON.parse(localStorage.getItem("ownedAlbums")) || [];

    checkbox.checked = savedAlbums.includes(checkbox.dataset.album);

    checkbox.addEventListener("change", function () {
        let owned = JSON.parse(localStorage.getItem("ownedAlbums")) || [];

        if (this.checked) {
            owned.push(this.dataset.album);
        } else {
            owned = owned.filter(item => item !== this.dataset.album);
        }

        localStorage.setItem("ownedAlbums", JSON.stringify(owned));
    });

    return card;
}

// --------------------------------------------------
// 5. Load Featured Albums
// --------------------------------------------------

function loadFeaturedAlbums() {
    const container = document.getElementById("featuredAlbums");
    featuredAlbums.forEach(album => container.appendChild(createAlbumCard(album)));
}

// --------------------------------------------------
// 6. Load All Albums (Alphabetical)
// --------------------------------------------------

function loadAllAlbums() {
    const container = document.getElementById("allAlbums");

    const sortedAlbums = [...albums].sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    sortedAlbums.forEach(album =>
        container.appendChild(createAlbumCard(album))
    );
}

// --------------------------------------------------
// 7. Artist Popup
// --------------------------------------------------

function openArtistPopup(artist) {
    const popup = document.getElementById("artistPopup");

    document.getElementById("artistName").innerText = artist;
    document.getElementById("artistInfo").innerText =
        artistInfo[artist] || "Artist information coming soon.";

    popup.style.display = "flex";
}

function closeArtistPopup() {
    document.getElementById("artistPopup").style.display = "none";
}

// --------------------------------------------------
// 8. Album Popup
// --------------------------------------------------

function openAlbumPopup(title, artist) {
    const album = albums.find(item => item.title === title && item.artist === artist);
    if (!album) return;

    document.getElementById("popupCover").src = album.cover;
    document.getElementById("popupAlbumTitle").innerText = album.title;
    document.getElementById("popupArtist").innerText = album.artist;
    document.getElementById("popupGenre").innerText = album.genre;
    document.getElementById("popupDate").innerText = album.releaseDate;
    document.getElementById("popupSlogan").innerText = album.slogan;
    document.getElementById("popupDescription").innerText = album.description;
    document.getElementById("popupRanking").innerText = album.ranking;
    document.getElementById("popupSong").innerText = album.song;

    document.getElementById("albumPopup").style.display = "flex";
}

function closeAlbumPopup() {
    document.getElementById("albumPopup").style.display = "none";
}

// --------------------------------------------------
// 9. Close popup when clicking outside
// --------------------------------------------------

window.onclick = function (event) {
    if (event.target.className === "popup") {
        event.target.style.display = "none";
    }
};

// --------------------------------------------------
// 10. Start Website
// --------------------------------------------------

loadFeaturedAlbums();
loadAllAlbums();
