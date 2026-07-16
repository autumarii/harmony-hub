// =============================
// Dark Mode Toggle
// =============================
document.addEventListener("DOMContentLoaded", async () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  showFeaturedSlide();
  loadAllAlbums();
  setupAlbumSearch();

  const albumsNeedingCovers = albums.filter(album => !album.cover);
  if (albumsNeedingCovers.length) {
    await fetchAlbumCovers(albumsNeedingCovers);
    showFeaturedSlide();
    loadAllAlbums();
  }
});
