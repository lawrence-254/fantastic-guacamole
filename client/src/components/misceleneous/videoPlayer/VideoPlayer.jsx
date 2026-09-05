// import React, { useState } from "react";
// import "./videoPlayer.css";

// import PlayIcon from "#";

// function VideoPlayer({ video }) {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div className="videoContainer">
//       {!isPlaying && (
//         <button onClick={() => setIsPlaying(true)} className="playButton">
//           <img src={PlayIcon} alt="Play" />
//         </button>
//       )}
//       <div
//         className=`mediaWrapper, ${
//           [styles.imageBackground]: !isPlaying,
//         }`
//         style={!isPlaying ? { backgroundImage: `url(${video.imageSrc})` } : {}}
//       >
//         {isPlaying ? (
//           <video
//             className='video'
//             src={video.videoSrc}
//             controls
//             autoPlay
//           />
//         ) : (
//           <div className='descriptionOverlay'>
//             <h4>{video.title}</h4>
//             <p>{video.description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default VideoPlayer;

import React from "react";

const VideoPlayer = () => {
  return <div></div>;
};

export default VideoPlayer;
