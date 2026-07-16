// =============================
// Carousel for Featured Albums
// =============================
let currentSlide = 0;
const albumsPerSlide = 4;

function showFeaturedSlide() {
  const container = document.getElementById("featuredAlbums");
  container.innerHTML = "";
  const start = currentSlide * albumsPerSlide;
  const end = start + albumsPerSlide;
  const visible = featuredAlbums.slice(start, end);
  visible.forEach(album => container.appendChild(createAlbumCard(album)));
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showFeaturedSlide();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if ((currentSlide + 1) * albumsPerSlide < featuredAlbums.length) {
    currentSlide++;
    showFeaturedSlide();
  }
});

