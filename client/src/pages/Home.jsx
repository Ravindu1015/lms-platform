// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Video from '../components/Video';
import { getVideos } from '../services/videoService';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((data) => setVideos(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Available Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}

export default Home;
