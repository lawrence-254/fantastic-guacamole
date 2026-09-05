import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./relatedPost.css";
import SmallPostCard from "../../../misceleneous/smallPostCard/SmallPostCard";

const mockData = [
  {
    title: "Opening Day of Boating Season, Seattle WA",
    image: "/images/index/resources/girlOnCanoe.png",
    description:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    postAuthor: {
      authorAvi: "/images/index/resources/james.png",
      authorName: "James",
    },
    date: "August 28, 2022",
  },
  {
    title: "How to choose the right laptop for programming",
    image: "/images/index/resources/closedLaptop.png",
    description:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    postAuthor: {
      authorAvi: "/images/index/resources/louis.png",
      authorName: "Louis",
    },
    date: "July 25, 2022",
  },
  {
    title: "How we built the first real self-driving car",
    image: "/images/index/resources/pinkCar.png",
    description:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    postAuthor: {
      authorAvi: "/images/index/resources/mary.png",
      authorName: "Mary",
    },
    date: "July 14, 2022",
  },
  {
    title: "How to Persuade Your Parents to Buy Fast Food",
    image: "/images/index/resources/hotDog.png",
    description:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    postAuthor: {
      authorAvi: "/images/index/resources/jon.png",
      authorName: "Jon Kantner",
    },
    date: "May 10, 2022",
  },
  {
    title: "How to Persuade Your Parents to Buy Fast Food",
    image: "/images/index/resources/hotDog.png",
    description:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    postAuthor: {
      authorAvi: "/images/index/resources/jon.png",
      authorName: "Jon Kantner",
    },
    date: "May 10, 2022",
  },
  {
    title: "How to Persuade Your Parents to Buy Fast Food",
    image: "/images/index/resources/hotDog.png",
    description:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    postAuthor: {
      authorAvi: "/images/index/resources/jon.png",
      authorName: "Jon Kantner",
    },
    date: "May 10, 2022",
  },
];

const RelatedPost = ({ items = mockData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const showNextItems = () => {
    setStartIndex((prevIndex) =>
      prevIndex + Math.floor(cardsToShow) < items.length
        ? prevIndex + Math.floor(cardsToShow)
        : 0
    );
  };

  const showPreviousItems = () => {
    setStartIndex((prevIndex) =>
      prevIndex - Math.floor(cardsToShow) >= 0
        ? prevIndex - Math.floor(cardsToShow)
        : items.length -
          (items.length % Math.floor(cardsToShow) || Math.floor(cardsToShow))
    );
  };

  const visibleItems = items.slice(
    startIndex,
    startIndex + Math.floor(cardsToShow)
  );

  return (
    <div className="trendyPostContainer">
      <div className="trendyPostHeader">
        <div className="titleWithRedDot">
          <div className="smallRedBullet"></div>Trendy Post
        </div>
        <div className="arrowButtons">
          <button onClick={showPreviousItems}>
            <img src="/images/index/popularPost/leftArrow.svg" />
          </button>
          <button onClick={showNextItems}>
            <img src="/images/index/popularPost/rightArrow.svg" />
          </button>
        </div>
      </div>
      <div className="trendyPostContent">
        {visibleItems.map((item, index) => (
          <Link key={index} to="/single" className="linkStyle">
            <SmallPostCard
              key={index}
              postImage={item.image}
              postTitle={item.title}
              postContent={item.description}
              postAuthor={item.postAuthor}
              postDate={item.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
