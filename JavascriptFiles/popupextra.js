// =============================
// Owned albums popup helpers
// =============================
function getOwnedAlbumStorage() {
  try {
    return JSON.parse(localStorage.getItem("ownedAlbums")) || [];
  } catch (error) {
    return [];
  }
}

function renderOwnedAlbumsPopup() {
  const popup = document.getElementById("ownedAlbumsPopup");
  const list = document.getElementById("ownedAlbumsList");
  if (!popup || !list) return;

  const owned = getOwnedAlbumStorage();
  const ownedAlbums = owned
    .map(key => {
      const [artist, ...titleParts] = key.split("-");
      const title = titleParts.join("-");
      const album = albums.find(item => item.artist === artist && item.title === title);
      return album ? `${album.artist} — ${album.title}` : key;
    })
    .filter(Boolean);

  list.innerHTML = ownedAlbums.length
    ? `<ul>${ownedAlbums.map(album => `<li>${album}</li>`).join("")}</ul>`
    : "<p>You have no owned albums saved yet.</p>";
}

function openOwnedAlbumsPopup() {
  renderOwnedAlbumsPopup();
  const popup = document.getElementById("ownedAlbumsPopup");
  if (popup) popup.style.display = "flex";
}

function closeOwnedAlbumsPopup() {
  const popup = document.getElementById("ownedAlbumsPopup");
  if (popup) popup.style.display = "none";
}

function setupOwnedAlbumsButton() {
  const button = document.getElementById("ownedAlbumsBtn");
  if (button) {
    button.addEventListener("click", openOwnedAlbumsPopup);
  }
}

// =============================
// Close popup when clicking outside
// =============================
window.onclick = function (event) {
  if (event.target.className === "popup") {
    event.target.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", setupOwnedAlbumsButton);
