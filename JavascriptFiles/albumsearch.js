// =============================
// Album Search
// =============================
function sortAlbumsByArtistAndTitle(albumList) {
  return [...albumList].sort((a, b) => {
    const artistCompare = a.artist.localeCompare(b.artist);
    if (artistCompare !== 0) return artistCompare;
    return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" });
  });
}

function setupAlbumSearch() {
  const searchInput = document.getElementById("albumSearch");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const container = document.getElementById("allAlbums");
    container.innerHTML = ""; // clear current albums
    const filtered = sortAlbumsByArtistAndTitle(albums.filter(album =>
      album.title.toLowerCase().includes(query) ||
      album.artist.toLowerCase().includes(query)
    ));
    filtered.forEach(album => container.appendChild(createAlbumCard(album)));
  });
}
