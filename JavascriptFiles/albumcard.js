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
      <img src="${album.cover || COVER_PLACEHOLDER}" alt="${album.title}" class="album-cover">
    </div>
    <a class="artist-link" onclick="openArtistPopup('${album.artist}')">${album.artist}</a>
    <a class="album-link" onclick="openAlbumPopup('${album.title}','${album.artist}')">${album.title}</a>
  `;

  // Checkbox ownership tracking
  const checkbox = card.querySelector(".owner-checkbox");
  const savedAlbums = getOwnedAlbumStorage();
  checkbox.checked = savedAlbums.some(entry => entry.albumKey === checkbox.dataset.album);

  checkbox.addEventListener("change", function () {
    let owned = getOwnedAlbumStorage();
    const albumKey = this.dataset.album;
    const existingIndex = owned.findIndex(entry => entry.albumKey === albumKey);

    if (this.checked) {
      if (existingIndex === -1) {
        owned.push({ albumKey, ownedOn: Date.now() });
      }
    } else if (existingIndex !== -1) {
      owned.splice(existingIndex, 1);
    }

    saveOwnedAlbumStorage(owned);

    if (typeof renderOwnedAlbumsPopup === "function") {
      renderOwnedAlbumsPopup();
    }
  });

  return card;
}
