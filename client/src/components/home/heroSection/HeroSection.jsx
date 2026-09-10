import { useState } from "react";

import VideoPlayer from "../../misceleneous/videoPlayer/VideoPlayer";

import "./heroSection.css";

function HeroSection({ singleContentList, videoItems }) {
  const [startIndex, setStartIndex] = useState(0);
  const featuredVideo='runnunu'

  const showNextItems = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex + 2;
      console.log("Next Index:", nextIndex);
      return nextIndex < videoItems.length ? nextIndex : 0;
    });
  };

  const showPreviousItems = () => {
    setStartIndex((prevIndex) => {
      const prevIndexNew = prevIndex - 2;
      console.log("Previous Index:", prevIndexNew);
      return prevIndexNew >= 0 ? prevIndexNew : videoItems.length - 2;
    });
  };

  // const visibleItems = videoItems.slice(startIndex, startIndex + 2);
  const visibleItems='james'
  console.log("Visible Items:", visibleItems);
  return (
    <div className="heroSectionContainer">
      <div className="heroSectionLeft">
        {singleContentList.map((item, index) => (
          <SingleContent
            key={index}
            backgroundUrl={item.backgroundImage}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className="heroSectionRight">
        <div className="arrowButtons">
          <button onClick={showPreviousItems} className="arrowButton">
            <img src="/images/index/popularPost/leftArrow.svg" alt="Previous" />
          </button>
          <button onClick={showNextItems} className="arrowButton">
            <img src="/images/index/popularPost/rightArrow.svg" alt="Next" />
          </button>
        </div>{" "}
        <div className="latestVideosSection">
          {featuredVideo && (
            <div className="column, videoColumn">
              <VideoPlayer video={featuredVideo} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

const SingleContent = ({ backgroundUrl, title, content }) => {
  return (
    <div
      className="singleContentContainer"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="singleContentContentArea">
        <h4 className="singleContentTitle">{title}</h4>
        <p className="singleContentExplanation">
          {content && content.slice(0, 88)}
        </p>
      </div>
    </div>
  );
};

// const VideoComponent = ({ videos, currentIndex, onNext, onPrev }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const currentVideo = videos[currentIndex];

//   const togglePlay = useCallback(() => {
//     setIsPlaying((prev) => !prev);
//   }, []);

//   return (
//     <div className={styles.videoContainer}>
//       <button
//         onClick={onPrev}
//         className={classNames(styles.navButton, styles.leftButton)}
//         aria-label="Previous video"
//       >
//         <img src="/images/index/sliderSection/arrowLeft.svg" alt="" />
//       </button>
//       <div
//         className={classNames(styles.mediaWrapper, {
//           [styles.imageBackground]: !isPlaying,
//         })}
//         style={
//           !isPlaying ? { backgroundImage: `url(${currentVideo.imageSrc})` } : {}
//         }
//         onClick={togglePlay}
//         role="button"
//         tabIndex={0}
//         onKeyPress={(e) => e.key === "Enter" && togglePlay()}
//         aria-label={isPlaying ? "Pause video" : "Play video"}
//       >
//         {isPlaying ? (
//           <video
//             className={styles.video}
//             src={currentVideo.videoSrc}
//             controls
//             autoPlay
//             onEnded={() => setIsPlaying(false)}
//           />
//         ) : (
//           <div className={styles.descriptionOverlay}>
//             <h4>{currentVideo.title}</h4>
//             <p>
//               {currentVideo.description.length > 100
//                 ? `${currentVideo.description.slice(0, 100)}...`
//                 : currentVideo.description}
//             </p>
//           </div>
//         )}
//       </div>
//       <button
//         onClick={onNext}
//         className={classNames(styles.navButton, styles.rightButton)}
//         aria-label="Next video"
//       >
//         <img src="/images/index/sliderSection/arrowRight.svg" alt="" />
//       </button>
//     </div>
//   );
// };
