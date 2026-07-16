// =============================
// Popup state helpers
// =============================
function setPopupOpenState(isOpen) {
  document.body.classList.toggle("popup-open", isOpen);
}

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
    .map(key => albums.find(album => key === `${album.artist}-${album.title}`))
    .filter(Boolean);

  list.innerHTML = ownedAlbums.length
    ? `<div class="owned-albums-grid">${ownedAlbums.map(album => `
        <div class="owned-album-card">
          <img src="${album.cover || COVER_PLACEHOLDER}" alt="${album.title}" class="owned-album-cover">
          <div class="owned-album-meta">
            <div class="owned-album-artist">${album.artist}</div>
            <div class="owned-album-title">${album.title}</div>
          </div>
        </div>
      `).join("")}</div>`
    : "<p>You have no owned albums saved yet.</p>";
}

function openOwnedAlbumsPopup() {
  renderOwnedAlbumsPopup();
  const popup = document.getElementById("ownedAlbumsPopup");
  if (popup) popup.style.display = "flex";
  setPopupOpenState(true);
}

function openPopupById(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "flex";
    setPopupOpenState(true);
  }
}

function closePopupById(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
  setPopupOpenState(false);
}

function closeOwnedAlbumsPopup() {
  const popup = document.getElementById("ownedAlbumsPopup");
  if (popup) popup.style.display = "none";
  setPopupOpenState(false);
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
    setPopupOpenState(false);
  }
};

document.addEventListener("DOMContentLoaded", setupOwnedAlbumsButton);
