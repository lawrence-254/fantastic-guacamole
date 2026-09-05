import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./SliderSection.module.css";

const data = [
  {
    image: "/images/index/resources/car1.png",
    title: "How to Drive a Car Safely",
    paragraph:
      "Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them.",
  },
  {
    image: "/images/index/resources/danceMusic.png",
    title: "How to Make Dance Music",
    paragraph:
      "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.",
  },
];

const dummyVideoData = [
  {
    imageSrc: "/images/index/resources/monitor.png",
    videoSrc: "",
    title: "Why I Stopped Using Multiple Monitor 0",
    description:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
  },
  {
    imageSrc: "/images/index/resources/monitor.png",
    videoSrc: "",
    title: "Why I Stopped Using Multiple Monitor 1",
    description:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
  },
  {
    imageSrc: "/images/index/resources/monitor.png",
    videoSrc: "",
    title: "Why I Stopped Using Multiple Monitor 2",
    description:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
  },
  {
    imageSrc: "/images/index/resources/monitor.png",
    videoSrc: "",
    title: "Why I Stopped Using Multiple Monitor 3",
    description:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
  },
];

const SingleContent = ({ image, text, paragraph }) => (
  <div
    className={styles.imageSlider}
    style={{ backgroundImage: `url(${image})` }}
    role="article"
  >
    <div className={styles.imageText}>
      <h4>{text}</h4>
      <p>
        {paragraph.length > 89 ? `${paragraph.slice(0, 89)}...` : paragraph}
      </p>
    </div>
  </div>
);

SingleContent.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  paragraph: PropTypes.string,
};

SingleContent.defaultProps = {
  image: "",
  text: "",
  paragraph: "",
};

const VideoComponent = ({ videos, currentIndex, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const currentVideo = videos[currentIndex];

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return (
    <div className={styles.videoContainer}>
      <button
        onClick={onPrev}
        className={classNames(styles.navButton, styles.leftButton)}
        aria-label="Previous video"
      >
        <img src="/images/index/sliderSection/arrowLeft.svg" alt="" />
      </button>
      <div
        className={classNames(styles.mediaWrapper, {
          [styles.imageBackground]: !isPlaying,
        })}
        style={
          !isPlaying ? { backgroundImage: `url(${currentVideo.imageSrc})` } : {}
        }
        onClick={togglePlay}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && togglePlay()}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <video
            className={styles.video}
            src={currentVideo.videoSrc}
            controls
            autoPlay
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div className={styles.descriptionOverlay}>
            <h4>{currentVideo.title}</h4>
            <p>
              {currentVideo.description.length > 100
                ? `${currentVideo.description.slice(0, 100)}...`
                : currentVideo.description}
            </p>
          </div>
        )}
      </div>
      <button
        onClick={onNext}
        className={classNames(styles.navButton, styles.rightButton)}
        aria-label="Next video"
      >
        <img src="/images/index/sliderSection/arrowRight.svg" alt="" />
      </button>
    </div>
  );
};

VideoComponent.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

const SliderSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = useCallback(() => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex + 1) % dummyVideoData.length
    );
  }, []);

  const prevVideo = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? dummyVideoData.length - 1 : prevIndex - 1
    );
  }, []);

  return (
    <section
      className={styles.sliderSectionContainer}
      aria-label="Featured Content"
    >
      <div className={classNames(styles.column, styles.imageColumn)}>
        {data.slice(0, 2).map((item, index) => (
          <Link
            key={index}
            to="/single"
            className={styles.linkWrapper}
            aria-label={`View ${item.title}`}
          >
            <SingleContent
              image={item.image}
              text={item.title}
              paragraph={item.paragraph}
            />
          </Link>
        ))}
      </div>
      <div className={styles.column}>
        <VideoComponent
          videos={dummyVideoData}
          currentIndex={currentVideoIndex}
          onNext={nextVideo}
          onPrev={prevVideo}
        />
      </div>
    </section>
  );
};

export { VideoComponent };
export default SliderSection;
