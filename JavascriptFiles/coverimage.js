// =============================
// Album Cover API (Deezer)
// =============================
const COVER_PLACEHOLDER =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250"><rect width="100%" height="100%" fill="#ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#888" font-family="sans-serif" font-size="14">No cover</text></svg>'
  );

function normalizeAlbumText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreAlbumMatch(result, album) {
  const resultTitle = normalizeAlbumText(result.title);
  const resultArtist = normalizeAlbumText(result.artist.name);
  const albumTitle = normalizeAlbumText(album.title);
  const albumArtist = normalizeAlbumText(album.artist);

  let score = 0;
  if (resultArtist.includes(albumArtist) || albumArtist.includes(resultArtist)) score += 2;
  if (resultTitle.includes(albumTitle) || albumTitle.includes(resultTitle)) score += 3;
  return score;
}

function findBestAlbumMatch(results, album) {
  if (!results?.length) return null;
  return results
    .map(result => ({ result, score: scoreAlbumMatch(result, album) }))
    .sort((a, b) => b.score - a.score)[0].result;
}

async function fetchCoverFromDeezer(album) {
  const query = encodeURIComponent(`${album.artist} ${album.title}`);
  const response = await fetch(`https://api.deezer.com/search/album?q=${query}&limit=5`);
  if (!response.ok) throw new Error(`Deezer API error: ${response.status}`);

  const data = await response.json();
  const match = findBestAlbumMatch(data.data, album);
  return match?.cover_big || match?.cover_medium || null;
}

async function fetchCoverFromItunes(album) {
  const query = encodeURIComponent(`${album.artist} ${album.title}`);
  const response = await fetch(`https://itunes.apple.com/search?term=${query}&entity=album&limit=5`);
  if (!response.ok) throw new Error(`iTunes API error: ${response.status}`);

  const data = await response.json();
  const results = (data.results || [])
    .filter(result => result.wrapperType === "collection")
    .map(result => ({
      title: result.collectionName,
      artist: { name: result.artistName },
      cover_big: result.artworkUrl100?.replace("100x100bb", "500x500bb")
    }));

  const match = findBestAlbumMatch(results, album);
  return match?.cover_big || null;
}

async function fetchCoverForAlbum(album) {
  if (album.cover) return;

  try {
    album.cover = await fetchCoverFromDeezer(album) || await fetchCoverFromItunes(album);
  } catch (error) {
    console.warn(`Could not fetch cover for "${album.title}" by ${album.artist}:`, error);
  }
}

async function fetchAlbumCovers(albumList) {
  await Promise.all(albumList.map(fetchCoverForAlbum));
  return albumList;
}
