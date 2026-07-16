// =============================
// Popup state helpers
// =============================
function setPopupOpenState(isOpen) {
  document.body.classList.toggle("popup-open", isOpen);
}

function getOwnedAlbumStorage() {
  try {
    const stored = JSON.parse(localStorage.getItem("ownedAlbums")) || [];
    const normalized = stored
      .map(entry => {
        if (typeof entry === "string") {
          return { albumKey: entry, ownedOn: Date.now() };
        }

        if (entry && typeof entry === "object") {
          return {
            albumKey: entry.albumKey || entry.key || entry.id || "",
            ownedOn: Number(entry.ownedOn) || Date.now()
          };
        }

        return null;
      })
      .filter(Boolean);

    if (normalized.length !== stored.length) {
      localStorage.setItem("ownedAlbums", JSON.stringify(normalized));
    }

    return normalized;
  } catch (error) {
    return [];
  }
}

function saveOwnedAlbumStorage(entries) {
  localStorage.setItem("ownedAlbums", JSON.stringify(entries));
}

function getAlbumReleaseYear(album) {
  const releaseDate = album.releaseDate || "";
  const yearMatch = releaseDate.match(/(\d{4})/);
  return yearMatch ? Number(yearMatch[1]) : 0;
}

function sortOwnedAlbums(albumList, sortType) {
  const sortedList = [...albumList];

  switch (sortType) {
    case "title":
      return sortedList.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" }));
    case "release-newest":
      return sortedList.sort((a, b) => getAlbumReleaseYear(b) - getAlbumReleaseYear(a));
    case "release-oldest":
      return sortedList.sort((a, b) => getAlbumReleaseYear(a) - getAlbumReleaseYear(b));
    case "owned-newest":
      return sortedList.sort((a, b) => (b.ownedOn || 0) - (a.ownedOn || 0));
    case "owned-oldest":
      return sortedList.sort((a, b) => (a.ownedOn || 0) - (b.ownedOn || 0));
    case "artist":
    default:
      return sortedList.sort((a, b) => {
        const artistCompare = a.artist.localeCompare(b.artist);
        if (artistCompare !== 0) return artistCompare;
        return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" });
      });
  }
}

function renderOwnedAlbumsPopup() {
  const popup = document.getElementById("ownedAlbumsPopup");
  const list = document.getElementById("ownedAlbumsList");
  const searchInput = document.getElementById("ownedAlbumSearch");
  const sortSelect = document.getElementById("ownedAlbumSort");

  if (!popup || !list) return;

  const ownedEntries = getOwnedAlbumStorage();
  const ownedAlbums = ownedEntries
    .map(entry => {
      const album = albums.find(item => entry.albumKey === `${item.artist}-${item.title}`);
      return album ? { ...album, ownedOn: entry.ownedOn || Date.now() } : null;
    })
    .filter(Boolean);

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const sortType = sortSelect ? sortSelect.value : "artist";

  const filteredAlbums = ownedAlbums.filter(album => {
    if (!query) return true;
    return album.title.toLowerCase().includes(query) || album.artist.toLowerCase().includes(query);
  });

  const sortedAlbums = sortOwnedAlbums(filteredAlbums, sortType);

  list.innerHTML = sortedAlbums.length
    ? `<div class="owned-albums-grid">${sortedAlbums.map(album => `
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

  const searchInput = document.getElementById("ownedAlbumSearch");
  const sortSelect = document.getElementById("ownedAlbumSort");

  if (searchInput) {
    searchInput.addEventListener("input", renderOwnedAlbumsPopup);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", renderOwnedAlbumsPopup);
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
