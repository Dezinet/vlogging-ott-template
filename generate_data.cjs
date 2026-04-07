const fs = require('fs');

const seriesIds = [
  "ser_01", "ser_02", "ser_03", "ser_04", "ser_05", "ser_06", "ser_07", 
  "ser_08", "ser_09", "ser_10", "ser_11", "ser_12", "ser_13", "ser_14"
];

const categories = ["SURVIVAL", "TRAVEL", "VISION", "TECH", "NATURE", "FOOD", "SCIENCE", "EXPLORATION", "DANGER", "ADVENTURE", "LIFESTYLE", "TRAVEL", "TECH", "SURVIVAL"];

const thumbnails = [
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
  "https://images.unsplash.com/photo-1540959733332-e94e270b4d48",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420",
  "https://images.unsplash.com/photo-1511300636408-57f1b29cc364",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1549239105-950c459ae6a9",
  "https://images.unsplash.com/photo-1447069387593-a5de0862481e",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7",
  "https://images.unsplash.com/photo-1510915363350-db23b9c03b12",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  "https://images.unsplash.com/photo-1517154421773-0529f29ea451"
];

const videos = [];

seriesIds.forEach((sid, sIdx) => {
  for (let i = 1; i <= 10; i++) {
    videos.push({
      id: `v_${sid}_${i}`,
      title: `Episode ${i}: ${categories[sIdx]} Adventures`,
      description: `The exciting part ${i} of our ${categories[sIdx]} series. Join us as we explore deeper and uncover new secrets.`,
      url: "https://cdn.dezinet.com/dummyvideos/Beautiful%20Village%20Life%20%26%20Landscapes%20Stock%20Footages%20Free%20HD%20Video%20-%20no%20copyright%20-%20Free%20HD%20videos%20-%20no%20copyright%20(1080p).mp4",
      thumbnail: thumbnails[sIdx],
      duration: `${Math.floor(Math.random() * 20) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      category: categories[sIdx],
      views: `${(Math.random() * 5 + 0.1).toFixed(1)}M`,
      publishedAt: new Date(Date.now() - (sIdx * 10 + i) * 86400000).toISOString(),
      isPremium: Math.random() > 0.8,
      seriesId: sid,
      episode: i
    });
  }
});

fs.writeFileSync('app/data/video.json', JSON.stringify(videos, null, 2));
