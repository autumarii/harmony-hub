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
  setPopupOpenState(true);
}

function closeArtistPopup() {
  document.getElementById("artistPopup").style.display = "none";
  setPopupOpenState(false);
}