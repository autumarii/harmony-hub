// =============================
// HarmonyHub Album Database
// =============================

const featuredAlbumPool = [
  {
    title: "Golden Hour : Part.3",
    artist: "ATEEZ",
    cover: "https://cdn-images.dzcdn.net/images/cover/28e2879642c67832e1422a629b047767/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/4yqYwYJpX7mQkZpZpXhV9e",
    genre: "K-Pop",
    releaseDate: "2025",
    slogan: "A new era of ATEEZ begins.",
    description: "A powerful album combining cinematic sounds, emotional vocals, and energetic performances.",
    ranking: "Top 10 K-Pop albums on Spotify Global charts",
    song: "Ice On My Teeth"
  },
  {
    title: "FML",
    artist: "SEVENTEEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/e6c7d4855dfd042ea1d7cf18057c271c/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/6yqYwYJpX7mQkZpZpXhV9f", // Spotify link
    genre: "K-Pop",
    releaseDate: "April 24, 2023",
    slogan: "Finding happiness even in difficult moments.",
    description: "A record-breaking SEVENTEEN album featuring emotional storytelling and powerful performances.",
    ranking: "One of the best-selling K-Pop albums worldwide",
    song: "Super"
  },
  {
    title: "Romance : Untold",
    artist: "ENHYPEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/0e5413b9e2063705bd8d02ab44023ba5/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/5yqYwYJpX7mQkZpZpXhV9h", // Spotify link
    genre: "K-Pop / Pop",
    releaseDate: "July 12, 2024",
    slogan: "A new chapter of love and memories.",
    description: "ENHYPEN explores romance through dreamy melodies and powerful performances.",
    ranking: "Top K-Pop album releases of 2024",
    song: "XO (Only If You Say Yes)"
  },
  {
    title: "Dark Blood",
    artist: "ENHYPEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/ad7832a7f9439bcb8d289d9d5acd8bb3/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/Dark%20Blood%20ENHYPEN/albums",
    genre: "K-Pop / Pop",
    releaseDate: "May 22, 2023",
    slogan: "A darker chapter in ENHYPEN's story.",
    description: "A moody and atmospheric ENHYPEN release that fits their dark, cinematic style.",
    ranking: "Fan-favorite ENHYPEN release",
    song: "Dark Blood"
  },
  {
    title: "Orange Blood",
    artist: "ENHYPEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/1f9eb5e488109ac00a89a3663e168209/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/Orange%20Blood%20ENHYPEN/albums",
    genre: "K-Pop / Pop",
    releaseDate: "November 17, 2023",
    slogan: "A bold blend of color, energy, and emotion.",
    description: "An energetic ENHYPEN album with vivid imagery and strong performance-driven hooks.",
    ranking: "Popular ENHYPEN album listing",
    song: "Orange Blood"
  },
  {
    title: "Desire: Unleash",
    artist: "ENHYPEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/9778d79fb4c926f7ad0a5ce2f3a8a2bb/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/Desire%20Unleash%20ENHYPEN/albums",
    genre: "K-Pop / Pop",
    releaseDate: "June 5, 2025",
    slogan: "Desire rises and takes center stage.",
    description: "A sleek and expressive ENHYPEN release centered on passion, confidence, and momentum.",
    ranking: "Trending ENHYPEN album addition",
    song: "Desire: Unleash"
  },
  {
    title: "Golden Hour : Part.1",
    artist: "ATEEZ",
    cover: "https://cdn-images.dzcdn.net/images/cover/eba976dd0399610b87130e5c1446812b/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/3yqYwYJpX7mQkZpZpXhV9d", // Spotify link
    genre: "K-Pop",
    releaseDate: "May 31, 2024",
    slogan: "The brightest moment starts now.",
    description: "ATEEZ begins their Golden Hour series with energetic tracks and unforgettable performances.",
    ranking: "Top 5 K-Pop album sales",
    song: "WORK"
  },
  {
    title: "17 Is Right Here",
    artist: "SEVENTEEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/5206c980b9bb49ecd4940252057915eb/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/7yqYwYJpX7mQkZpZpXhV9g", // Spotify link
    genre: "K-Pop",
    releaseDate: "April 29, 2024",
    slogan: "SEVENTEEN's journey collected together.",
    description: "A special best album celebrating SEVENTEEN's past achievements and future.",
    ranking: "Major global album charts",
    song: "Maestro"
  },
  {
    title: "DRIP",
    artist: "BABYMONSTER",
    cover: "https://cdn-images.dzcdn.net/images/cover/c49d4419cfa49e7939a3d1f3ec3a0605/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/8yqYwYJpX7mQkZpZpXhV9i", // Spotify link
    genre: "K-Pop / Hip-Hop",
    releaseDate: "November 1, 2024",
    slogan: "Confidence with every beat.",
    description: "BABYMONSTER delivers strong vocals, rap, and bold performances.",
    ranking: "Top rookie group album releases",
    song: "DRIP"
  },
  {
    title: "I Feel",
    artist: "I-DLE",
    cover: "https://cdn-images.dzcdn.net/images/cover/4581c816426c276adb0b30ce7fdf8ba8/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/9yqYwYJpX7mQkZpZpXhV9j", // Spotify link
    genre: "K-Pop",
    releaseDate: "May 15, 2023",
    slogan: "Confidence begins with yourself.",
    description: "A stylish album filled with unique concepts and powerful messages.",
    ranking: "Top K-Pop albums worldwide",
    song: "Queencard"
  },
  {
    title: "Love Catcher",
    artist: "YENA",
    cover: "https://cdn-images.dzcdn.net/images/cover/2c3b45b1c8f471b732bcde8ba3c9e8c2/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/1IxQnpYIIFY9F2IVVsD27F", // Spotify link
    genre: "K-Pop / Pop",
    releaseDate: "2025",
    slogan: "A colorful story about love.",
    description: "YENA combines bright melodies with emotional storytelling.",
    ranking: "Popular soloist release",
    song: "Catch Catch"
  },
  {
    title: "An Ode",
    artist: "SEVENTEEN",
    cover: "https://cdn-images.dzcdn.net/images/cover/431a73c8685d609b429132af38104dda/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/An%20Ode%20SEVENTEEN/albums",
    genre: "K-Pop / Pop",
    releaseDate: "September 16, 2019",
    slogan: "A timeless devotional release.",
    description: "SEVENTEEN delivers a heartfelt and polished collection with a warm, nostalgic atmosphere.",
    ranking: "Beloved SEVENTEEN era",
    song: "An Ode"
  },
  {
    title: "The Name Chapter: TEMPTATION",
    artist: "Tomorrow X Together",
    cover: "https://cdn-images.dzcdn.net/images/cover/3926d4612e07fb23f04fd520a5ec30aa/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/Tomorrow%20X%20Together%20The%20Name%20Chapter%20TEMPTATION/albums",
    genre: "K-Pop / Pop",
    releaseDate: "January 18, 2023",
    slogan: "The pull of curiosity and temptation.",
    description: "TXT explores a darker and more mysterious sound with strong emotional storytelling.",
    ranking: "Popular TXT album release",
    song: "Sugar Rush Ride"
  },
  {
    title: "The Chaos Chapter: FREEZE",
    artist: "Tomorrow X Together",
    cover: "https://cdn-images.dzcdn.net/images/cover/29762c42a990d69d49f9df6543b2c88b/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/Tomorrow%20X%20Together%20The%20Chaos%20Chapter%20FREEZE/albums",
    genre: "K-Pop / Pop",
    releaseDate: "May 31, 2021",
    slogan: "Frozen emotions can still move us.",
    description: "TXT's emotionally provocative release highlights vulnerability, intensity, and bold performances.",
    ranking: "TXT fan-favorite era",
    song: "0x1=Lovesong (I Know I Love You)"
  },
  {
    title: "Ready to Be",
    artist: "TWICE",
    cover: "https://cdn-images.dzcdn.net/images/cover/1709b9e5d10fe057f6cf89efb29619ed/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/TWICE%20Ready%20to%20Be/albums",
    genre: "K-Pop / Pop",
    releaseDate: "March 10, 2023",
    slogan: "Confidence and growth with every beat.",
    description: "TWICE bring a polished, bright, and empowering sound to this highly acclaimed comeback.",
    ranking: "One of TWICE's strongest releases",
    song: "Set Me Free"
  },
  {
    title: "Between 1&2",
    artist: "TWICE",
    cover: "https://cdn-images.dzcdn.net/images/cover/0824c80571e9cee63eaacc5a52a8e6d8/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/TWICE%20Between%201%262/albums",
    genre: "K-Pop / Pop",
    releaseDate: "August 26, 2022",
    slogan: "A sweet, fearless chapter.",
    description: "TWICE continues to deliver charming hooks, emotional depth, and energetic performances.",
    ranking: "Popular TWICE release",
    song: "Talk That Talk"
  },
  {
    title: "Shot Callers",
    artist: "LNGSHOT",
    cover: "https://cdn-images.dzcdn.net/images/cover/0aa091e30e5a9380c6a932a0a2b83a9a/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/search/Shot%20Callers%20LNGSHOT/albums",
    genre: "Memphis / Hip-Hop / R&B / Pop",
    releaseDate: "January 13, 2026",
    slogan: "A sharper, more commanding release.",
    description: "Shot Callers is LNGSHOT's debut EP, led by the title track 'Moonwalkin'.",
    ranking: "Notable LNGSHOT project",
    song: "Moonwalkin'"
  }
];

const albums = [
  ...featuredAlbumPool,
  {
    title: "V8",
    artist: "Vernon & The8",
    cover: "https://cdn-images.dzcdn.net/images/cover/b4ee0dc871ae59bef5e06cb1a0c7ce15/500x500-000000-80-0-0.jpg",
    spotifyUrl: "https://open.spotify.com/album/6yqYwYJpX7mQkZpZpXhV9k", // Spotify link
    genre: "K-Pop / Hip-Hop",
    releaseDate: "2026",
    slogan: "Two artists. One vision.",
    description: "A collaboration project combining unique styles from Vernon and The8.",
    ranking: "Fan favorite collaboration",
    song: "Singasong"
  }
];


// =============================
// Artist Information
// =============================
function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomBuffer = new Uint32Array(1);
    const randomSource = window.crypto || self.crypto;
    if (randomSource && typeof randomSource.getRandomValues === "function") {
      randomSource.getRandomValues(randomBuffer);
    } else {
      randomBuffer[0] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }

    const j = randomBuffer[0] % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const featuredAlbums = shuffleArray(featuredAlbumPool).slice(0, 8);

const artistInfo = {
  "ATEEZ": "ATEEZ is an eight-member K-Pop group known for powerful performances, cinematic storytelling, and energetic music.",
  "SEVENTEEN": "SEVENTEEN is a self-producing K-Pop group famous for their teamwork, choreography, and diverse musical styles.",
  "ENHYPEN": "ENHYPEN is a K-Pop group known for their dark concepts, storytelling, and strong performances.",
  "I-DLE": "I-DLE is known for creative concepts, self-produced music, and unique styles.",
  "BABYMONSTER": "BABYMONSTER is a YG Entertainment girl group known for powerful vocals and performance skills.",
  "YENA": "YENA is a solo artist known for her bright concepts, energetic performances, and cheerful music.",
  "Tomorrow X Together": "Tomorrow X Together, also known as TXT, is a K-Pop group recognized for their storytelling, bold concepts, and emotionally resonant tracks.",
  "TWICE": "TWICE is a globally loved K-Pop girl group known for bright concepts, strong vocals, and catchy pop hooks.",
  "LNGSHOT": "LNGSHOT is a rising K-Pop act known for a bold, energetic identity and contemporary sound.",
  "YEONJUN": "YEONJUN is a member of TXT known for his dancing, vocals, and artistic creativity.",
  "Vernon": "Vernon is a SEVENTEEN member known for rap, creativity, and solo projects.",
  "The8": "The8 is a SEVENTEEN member known for dance, artistry, and solo music.",
  "Vernon & The8": "A collaboration project combining both Vernon and The8’s unique styles, which has been previously hinted at in The8's solo work."
};


