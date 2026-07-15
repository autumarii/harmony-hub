// =============================
// HarmonyHub Album Database
// =============================

// --- Featured Albums ---
const featuredAlbums = [
  {
    title: "Golden Hour : Part.3",
    artist: "ATEEZ",
    cover: "images/covers/ateez_golden_hour_3.jpg",
    genre: "K-Pop",
    releaseDate: "2025",
    slogan: "A new era of ATEEZ begins.",
    description: "A powerful album combining cinematic sounds, emotional vocals, and energetic performances.",
    ranking: "Top 10 K-Pop albums on Spotify Global charts",
    song: "Ice On My Teeth"
  },
  // ... other featured albums unchanged ...
];

// --- Main Albums ---
const albums = [
  ...featuredAlbums,
  {
    title: "V8",
    artist: "Vernon & The8",
    cover: "images/covers/v8.jpg",
    genre: "K-Pop / Hip-Hop",
    releaseDate: "2025",
    slogan: "Two artists. One vision.",
    description: "A collaboration project combining unique styles from Vernon and The8.",
    ranking: "Fan favorite collaboration",
    song: "Singasong" // updated title track
  },
  // ... other albums unchanged ...
];

// --- Artist Information ---
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

  card.innerHTML = `
    <div class="album-cover-container">
      <input type="checkbox" class="owner-checkbox" data-album="${album.artist}-${album.title}">
      <img src="${album.cover}" alt="${album.title}" class="album-cover">
    </div>
    <a class="artist-link" onclick="openArtistPopup('${album.artist}')">${album.artist}</a>
    <a class="album-link" onclick="openAlbumPopup('${album.title}','${album.artist}')">${album.title}</a>
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

// =============================
// Load Albums
// =============================
function loadFeaturedAlbums() {
  const container = document.getElementById("featuredAlbums");
  featuredAlbums.forEach(album => container.appendChild(createAlbumCard(album)));
}

function loadAllAlbums() {
  const container = document.getElementById("allAlbums");
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
    <p>${artistInfo[artist] || "Artist information coming soon."}</p>
  `;

  popup.style.display = "flex";
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

  document.getElementById("albumPopup").style.display = "flex";
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

  loadFeaturedAlbums();
  loadAllAlbums();
});
