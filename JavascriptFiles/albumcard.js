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
  const savedAlbums = JSON.parse(localStorage.getItem("ownedAlbums")) || [];
  checkbox.checked = savedAlbums.includes(checkbox.dataset.album);

  checkbox.addEventListener("change", function () {
    let owned = JSON.parse(localStorage.getItem("ownedAlbums")) || [];
    if (this.checked) {
      owned = [...new Set([...owned, this.dataset.album])];
    } else {
      owned = owned.filter(item => item !== this.dataset.album);
    }
    localStorage.setItem("ownedAlbums", JSON.stringify(owned));

    if (typeof renderOwnedAlbumsPopup === "function") {
      renderOwnedAlbumsPopup();
    }
  });

  return card;
}
