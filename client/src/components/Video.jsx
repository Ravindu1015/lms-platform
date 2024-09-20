import React from 'react';

function Video({ title, description, videoUrl }) {
  return (
    <div className="p-4 bg-gray-200 rounded">
      <h2 className="font-semibold">{title}</h2>
      <p>{description}</p>
      <video controls className="w-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
