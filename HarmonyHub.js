// =============================
// HarmonyHub Album Database
// =============================

const featuredAlbums = [
  {
    title: "Golden Hour : Part.3",
    artist: "ATEEZ",
    cover: "https://open.spotify.com/album/4yqYwYJpX7mQkZpZpXhV9e", // Spotify link
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
    cover: "https://open.spotify.com/album/6yqYwYJpX7mQkZpZpXhV9f", // Spotify link
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
    cover: "https://open.spotify.com/album/5yqYwYJpX7mQkZpZpXhV9h", // Spotify link
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
    cover: "https://open.spotify.com/album/3yqYwYJpX7mQkZpZpXhV9d", // Spotify link
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
    cover: "https://open.spotify.com/album/7yqYwYJpX7mQkZpZpXhV9g", // Spotify link
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
    cover: "https://open.spotify.com/album/8yqYwYJpX7mQkZpZpXhV9i", // Spotify link
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
    cover: "https://open.spotify.com/album/9yqYwYJpX7mQkZpZpXhV9j", // Spotify link
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
    cover: "https://open.spotify.com/album/1IxQnpYIIFY9F2IVVsD27F", // Spotify link
    genre: "K-Pop / Pop",
    releaseDate: "2025",
    slogan: "A colorful story about love.",
    description: "YENA combines bright melodies with emotional storytelling.",
    ranking: "Popular soloist release",
    song: "Love Catcher"
  }
];

const albums = [
  ...featuredAlbums,
  {
    title: "V8",
    artist: "Vernon & The8",
    cover: "https://open.spotify.com/album/6yqYwYJpX7mQkZpZpXhV9k", // Spotify link
    genre: "K-Pop / Hip-Hop",
    releaseDate: "2025",
    slogan: "Two artists. One vision.",
    description: "A collaboration project combining unique styles from Vernon and The8.",
    ranking: "Fan favorite collaboration",
    song: "Singasong"
  }
];

// =============================
// Artist Information
// =============================
const artistInfo = {
  "ATEEZ": "ATEEZ is an eight-member K-Pop group known for powerful performances, cinematic storytelling, and energetic music.",
  "SEVENTEEN": "SEVENTEEN is a self-producing K-Pop group famous for their teamwork, choreography, and diverse musical styles.",
  "ENHYPEN": "ENHYPEN is a K-Pop group known for their dark concepts, storytelling, and strong performances.",
  "(G)I-DLE": "(G)I-DLE is known for creative concepts, self-produced music, and unique styles.",
  "BABYMONSTER": "BABYMONSTER is a YG Entertainment girl group known for powerful vocals and performance skills.",
  "YENA": "YENA is a solo artist known for bright concepts, energetic performances, and cheerful music.",
  "YEONJUN": "YEONJUN is a member of TXT known for his dancing, vocals, and artistic creativity.",
  "Vernon": "Vernon is a SEVENTEEN member known for rap, creativity, and solo projects.",
  "The8": "The8 is a SEVENTEEN member known for dance, artistry, and solo music.",
  "Vernon & The8": "A collaboration project combining both artists’ unique styles."
};
// =============================
// Album Card Creation
// =============================
function createAlbumCard(album) {
  const card = document.createElement("div");
  card.className = "album-card";
  card.style.textAlign = "center"; // Center text inside each card

  card.innerHTML = `
    <div class="album-cover-container">
      <input type="checkbox" class="owner-checkbox" data-album="${album.artist}-${album.title}">
      <img src="${album.cover}" alt="${album.title}" class="album-cover">
    </div>
    <a class="artist-link" onclick="openArtistPopup('${album.artist}')">${album.artist}</a>
    <a class="album-link" onclick="openAlbumPopup('${album.title}','${album.artist}')">${album.title}</a>
  `;

  // Checkbox ownership tracking
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

// =============================
// Load Albums
// =============================
function loadFeaturedAlbums() {
  const container = document.getElementById("featuredAlbums");
  container.style.textAlign = "center"; // Center text in container
  featuredAlbums.forEach(album => container.appendChild(createAlbumCard(album)));
}

function loadAllAlbums() {
  const container = document.getElementById("allAlbums");
  container.style.textAlign = "center"; // Center text in container
  const sortedAlbums = [...albums].sort((a, b) => a.title.localeCompare(b.title));
  sortedAlbums.forEach(album => container.appendChild(createAlbumCard(album)));
}
// =============================
// Artist Popup
// =============================
function openArtistPopup(artist) {
  const popup = document.getElementById("artistPopup");
  const artistNameEl = document.getElementById("artistName");
  const artistInfoEl = document.getElementById("artistInfo");

  // Special case for Vernon & The8
  if (artist === "Vernon & The8") {
    artistNameEl.innerHTML = `
      <a href="https://open.spotify.com/artist/VernonSpotifyID" target="_blank">Vernon</a> & 
      <a href="https://open.spotify.com/artist/The8SpotifyID" target="_blank">The8</a>
    `;
  } else {
    artistNameEl.innerHTML = `<a href="https://open.spotify.com/search/${encodeURIComponent(artist)}" target="_blank">${artist}</a>`;
  }

  // Add artist image + info
  artistInfoEl.innerHTML = `
    <img src="images/artists/${artist}.jpg" alt="${artist}" class="artist-photo">
    <p>${artistInfo[artist] || "Artist information unavailable."}</p>
  `;

  popup.style.display = "flex";
  popup.style.textAlign = "center"; // Center popup text
}

function closeArtistPopup() {
  document.getElementById("artistPopup").style.display = "none";
}

// =============================
// Album Popup
// =============================
function openAlbumPopup(title, artist) {
  const album = albums.find(item => item.title === title && item.artist === artist);
  if (!album) return;

  document.getElementById("popupCover").src = album.cover;
  document.getElementById("popupAlbumTitle").innerText = album.title;
  document.getElementById("popupArtist").innerHTML =
    `<a href="https://open.spotify.com/search/${encodeURIComponent(album.artist)}" target="_blank">${album.artist}</a>`;
  document.getElementById("popupGenre").innerText = album.genre;
  document.getElementById("popupDate").innerText = album.releaseDate;
  document.getElementById("popupSlogan").innerText = album.slogan;
  document.getElementById("popupDescription").innerText = album.description;
  document.getElementById("popupRanking").innerText = album.ranking;
  document.getElementById("popupSong").innerText = album.song;

  const popup = document.getElementById("albumPopup");
  popup.style.display = "flex";
  popup.style.textAlign = "center"; // Center popup text
}

function closeAlbumPopup() {
  document.getElementById("albumPopup").style.display = "none";
}

// =============================
// Close popup when clicking outside
// =============================
window.onclick = function (event) {
  if (event.target.className === "popup") {
    event.target.style.display = "none";
  }
};

// =============================
// Dark Mode Toggle
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Load albums on page ready
  loadFeaturedAlbums();
  loadAllAlbums();
});
