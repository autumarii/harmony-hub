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
  const sortedAlbums = sortAlbumsByArtistAndTitle(albums);
  sortedAlbums.forEach(album => container.appendChild(createAlbumCard(album)));
}
