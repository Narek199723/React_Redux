import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
    </div>
  );
};

export default VideoItem;
