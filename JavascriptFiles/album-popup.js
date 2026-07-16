// =============================
// Album Popup
// =============================
function openAlbumPopup(title, artist) {
  const album = albums.find(item => item.title === title && item.artist === artist);
  if (!album) return;

  document.getElementById("popupCover").src = album.cover || COVER_PLACEHOLDER;
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
  setPopupOpenState(true);
}

function closeAlbumPopup() {
  document.getElementById("albumPopup").style.display = "none";
  setPopupOpenState(false);
}
