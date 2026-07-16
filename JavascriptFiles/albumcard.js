// =============================
// Album Card Creation
// =============================
let activePreviewAudio = null;
let activePreviewButton = null;

function stopActivePreview() {
  if (activePreviewAudio) {
    activePreviewAudio.pause();
    activePreviewAudio.currentTime = 0;
    activePreviewAudio = null;
  }

  if (activePreviewButton) {
    activePreviewButton.classList.remove("playing");
    activePreviewButton = null;
  }
}

async function fetchTrackPreview(album) {
  const query = encodeURIComponent(`${album.artist} ${album.song || album.title}`);
  const response = await fetch(`https://api.deezer.com/search/track?q=${query}&limit=1`);

  if (!response.ok) {
    throw new Error(`Preview fetch error: ${response.status}`);
  }

  const data = await response.json();
  const result = data.data?.[0];
  return result?.preview || null;
}

async function playAlbumPreview(album, button) {
  if (button.classList.contains("playing")) {
    stopActivePreview();
    return;
  }

  stopActivePreview();
  button.classList.add("loading");
  button.disabled = true;

  try {
    const previewUrl = await fetchTrackPreview(album);
    if (!previewUrl) {
      button.title = "Preview unavailable";
      return;
    }

    const audio = new Audio(previewUrl);
    activePreviewAudio = audio;
    activePreviewButton = button;
    audio.addEventListener("ended", () => {
      button.classList.remove("playing");
      activePreviewAudio = null;
      activePreviewButton = null;
    });
    audio.addEventListener("error", () => {
      button.classList.remove("playing");
      activePreviewAudio = null;
      activePreviewButton = null;
    });

    await audio.play();
    button.classList.add("playing");
    button.textContent = "❚❚";
  } catch (error) {
    console.warn(`Could not play preview for "${album.title}" by ${album.artist}:`, error);
  } finally {
    button.classList.remove("loading");
    button.disabled = false;
  }
}

function createAlbumCard(album) {
  const card = document.createElement("div");
  card.className = "album-card";
  card.style.textAlign = "center"; // Center text inside each card

  card.innerHTML = `
    <div class="album-cover-container">
      <input type="checkbox" class="owner-checkbox" data-album="${album.artist}-${album.title}">
      <button class="play-preview-btn" type="button" title="Play title track preview" aria-label="Play title track preview">▶</button>
      <img src="${album.cover || COVER_PLACEHOLDER}" alt="${album.title}" class="album-cover">
    </div>
    <a class="artist-link" onclick="openArtistPopup('${album.artist}')">${album.artist}</a>
    <a class="album-link" onclick="openAlbumPopup('${album.title}','${album.artist}')">${album.title}</a>
  `;

  const playButton = card.querySelector(".play-preview-btn");
  if (playButton) {
    playButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playAlbumPreview(album, playButton);
    });
  }

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
