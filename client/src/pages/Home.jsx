import Layout from "../components/layout/Layout";
import TopTags from "../components/home/topTags/TopTags";
import HeroSection from "../components/home/heroSection/HeroSection";
import PopularPost from "../components/home/popularPost/PopularPost";
import NewPost from "../components/home/newPost/NewPost";
import TopPost from "../components/home/topPost/TopPost";
import Weather from "../components/home/weather/Weather";
import TrendyPost from "../components/home/trendyPost/TrendyPost";
import SportsWidget from "../components/home/sportsWidget/SportsWidget";

// mark up Items to be deleted
import Car from "../assets/Home/heroSection/car.svg";
import Music from "../assets/Home/heroSection/music.svg";
import James from "../assets/Home/popularPost/jamesAvi.svg";
import Hoebregts from "../assets/Home/popularPost/HoebregtsAvi.svg";
import Mary from "../assets/Home/popularPost/maryAvi.svg";
import Kantner from "../assets/Home/popularPost/KantnerAvi.svg";
import one from "../assets/Home/popularPost/1.svg";
import two from "../assets/Home/popularPost/2.svg";
import three from "../assets/Home/popularPost/3.svg";
import four from "../assets/Home/popularPost/4.svg";

import FoodTag from "../assets/Home/toptags/food.svg";
import Animal1Tag from "../assets/Home/toptags/animal1.svg";
import CarTag from "../assets/Home/toptags/car.svg";
import SportTag from "../assets/Home/toptags/sport.svg";
import MusicTag from "../assets/Home/toptags/music.svg";
import TechnologyTag from "../assets/Home/toptags/technology.svg";
import AbstractTag from "../assets/Home/toptags/abstract.svg";
import Animal2Tag from "../assets/Home/toptags/animal2.svg";

import calenderTeam1 from "../assets/Home/sportsWidget/calender01.png";
import calenderTeam8 from "../assets/Home/sportsWidget/calender08.png";
import calenderTeam5 from "../assets/Home/sportsWidget/calender05.png";
import calenderTeam4 from "../assets/Home/sportsWidget/calender04.png";
import calenderTeam2 from "../assets/Home/sportsWidget/calender02.png";
import calenderTeam3 from "../assets/Home/sportsWidget/calender03.png";
import Arsenal from "../assets/Home/sportsWidget/arsenal.svg";
import Chelsea from "../assets/Home/sportsWidget/chelsea.svg";
import Liverpool from "../assets/Home/sportsWidget/liverpool.svg";
import ManchesterCity from "../assets/Home/sportsWidget/manchesterCity.svg";
import ManchesterUnited from "../assets/Home/sportsWidget/manchesterUnited.svg";
import Tottenham from "../assets/Home/sportsWidget/tottenham.svg";
import LiverpoolCrest from "../assets/Home/sportsWidget/liverpoolCrest.svg";
import ManchesterCityCrest from "../assets/Home/sportsWidget/manchesterCityCrest.svg";

// end of mark up items to be deleted

const categories = [
  {
    title: "food",
    imgUrl: FoodTag,
  },
  {
    title: "animal",
    imgUrl: Animal1Tag,
  },
  {
    title: "car",
    imgUrl: CarTag,
  },
  {
    title: "sport",
    imgUrl: SportTag,
  },
  {
    title: "music",
    imgUrl: MusicTag,
  },
  {
    title: "technology",
    imgUrl: TechnologyTag,
  },
  {
    title: "abstract",
    imgUrl: AbstractTag,
  },
  {
    title: "animal",
    imgUrl: Animal2Tag,
  },
];

const singleContentList = [
  {
    backgroundImage: Car,
    title: "How to Drive a Car Safely",
    content: `Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them.`,
  },
  {
    backgroundImage: Music,
    title: "How to Make Dance Music",
    content: `Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.`,
  },
];

const popularPost = [
  {
    postImage: one,
    postTitle: "Opening Day of Boating Season, Seattle WA",
    postContent: `Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge`,
    postAuthor: {
      authorName: "James",
      authorAvi: James,
    },
    postDate: "August 18 , 2022",
  },
  {
    postImage: two,
    postTitle: "How to choose the right laptop for programming",
    postContent: `Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs`,
    postAuthor: {
      authorName: "Louis Hoebregts",
      authorAvi: Hoebregts,
    },
    postDate: "July 25 , 2022",
  },
  {
    postImage: three,
    postTitle: "How we built the first real self-driving car",
    postContent: `Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when`,
    postAuthor: {
      authorName: "Mary",
      authorAvi: Mary,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: four,
    postTitle: "How to Persuade Your Parents to Buy Fast Food",
    postContent: `Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.`,
    postAuthor: {
      authorName: "Jon Kantner",
      authorAvi: Kantner,
    },
    postDate: "May 10 , 2022",
  },
];

const newPost = [
  {
    postImage: "",
    postTitle: "House boating on Lake Shasta",
    postContent: `The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.

`,
    postAuthor: {
      authorName: "James",
      authorAvi: James,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "How to choose the right laptop for programming",
    postContent: `Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs`,
    postAuthor: {
      authorName: "Robert",
      authorAvi: Hoebregts,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "Why Buying a New Car Makes More Sense than Buying Used",
    postContent: `Many experts will tell you buying cars used is best for your long-term financial health. Here’s why they’re (mostly) wrong`,
    postAuthor: {
      authorName: "Mary",
      authorAvi: Mary,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "Lasagna is but a Pasta Cake",
    postContent: `Re-envision the description of a common food from a different perspective — it is … pasta cake layered with cheese, meat, pasta repeated, bake and serve. `,
    postAuthor: {
      authorName: "Jon Kantner",
      authorAvi: Kantner,
    },
    postDate: "July 14 , 2022",
  },
];

const trendyPost = [
  {
    postImage: "",
    postTitle: "How to build a self-driving car in one month",
    postContent: `Can I learn the necessary computer science to build the software part of a self-driving car in one month?`,
    postAuthor: {
      authorName: "Mary",
      authorAvi: Mary,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "Self-Improvement Has Become An Extreme Sport",
    postContent: `What we’re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we’re supposed to do`,
    postAuthor: {
      authorName: "James",
      authorAvi: James,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "10 Cooking Lessons to Use in Everyday Life",
    postContent: `I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation`,
    postAuthor: {
      authorName: "Jon Kantner",
      authorAvi: Kantner,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle:
      "Typography can make or break your design: a process for choosing type",
    postContent: `One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers can communicate with users. Typography can make or break a design. There’s a beauty and complexity to typography. Some people devote their…
`,
    postAuthor: {
      authorName: "Robert",
      authorAvi: Hoebregts,
    },
    postDate: "July 14 , 2022",
  },
];

const topPost = [
  {
    postImage: "",
    postTitle: "House boating on Lake Shasta",
    postContent: `The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.

`,
    postAuthor: {
      authorName: "James",
      authorAvi: James,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "How to choose the right laptop for programming",
    postContent: `Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs`,
    postAuthor: {
      authorName: "Robert",
      authorAvi: Hoebregts,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "Why Buying a New Car Makes More Sense than Buying Used",
    postContent: `Many experts will tell you buying cars used is best for your long-term financial health. Here’s why they’re (mostly) wrong`,
    postAuthor: {
      authorName: "Mary",
      authorAvi: Mary,
    },
    postDate: "July 14 , 2022",
  },
  {
    postImage: "",
    postTitle: "Lasagna is but a Pasta Cake",
    postContent: `Re-envision the description of a common food from a different perspective — it is … pasta cake layered with cheese, meat, pasta repeated, bake and serve. `,
    postAuthor: {
      authorName: "Jon Kantner",
      authorAvi: Kantner,
    },
    postDate: "July 14 , 2022",
  },
];

const defaultFixtureDetails = {
  month: 0,
  year: 2022,
  fixtureDates: {
    11: {
      28: calenderTeam1,
    },
    0: {
      2: calenderTeam8,
      14: calenderTeam5,
      18: calenderTeam4,
      31: calenderTeam2,
    },
    1: {
      4: calenderTeam3,
    },
  },
};

const clubsStandingsTable = [
  {
    rank: 5,
    team: "Arsenal",
    logo: Arsenal,
    gp: 38,
    w: 22,
    d: 3,
    l: 13,
    f: 61,
    a: 48,
    gd: 13,
    points: 69,
  },
  {
    rank: 3,
    team: "Chelsea",
    logo: Chelsea,
    gp: 38,
    w: 21,
    d: 11,
    l: 6,
    f: 76,
    a: 33,
    gd: 43,
    points: 74,
  },
  {
    rank: 2,
    team: "Liverpool",
    logo: Liverpool,
    gp: 38,
    w: 28,
    d: 8,
    l: 2,
    f: 94,
    a: 26,
    gd: 68,
    points: 92,
  },
  {
    rank: 1,
    team: "Manchester City",
    logo: ManchesterCity,
    gp: 38,
    w: 29,
    d: 6,
    l: 3,
    f: 99,
    a: 26,
    gd: 73,
    points: 93,
  },
  {
    rank: 6,
    team: "Manchester United",
    logo: ManchesterUnited,
    gp: 38,
    w: 16,
    d: 10,
    l: 12,
    f: 57,
    a: 57,
    gd: 0,
    points: 58,
  },
  {
    rank: 4,
    team: "Totenham Hotspurs",
    logo: Tottenham,
    gp: 38,
    w: 22,
    d: 5,
    l: 11,
    f: 69,
    a: 40,
    gd: 29,
    points: 71,
  },
];

const focusFixture = {
  round: "The Final Round",
  HomeTeamCrest: ManchesterCityCrest,
  homeTeam: "Manchester City",
  homeTeamScore: "00",
  AwayTeamCrest: LiverpoolCrest,
  awayTeam: "Liverpool",
  awayTeamScore: "00",
  fixtureDate: "Sunday, August 8th",
};
function Home() {
  return (
    <Layout>
      {categories && <TopTags hashTags={categories} />}
      {singleContentList && (
        <HeroSection singleContentList={singleContentList} />
      )}
      {popularPost && <PopularPost postItems={popularPost} />}
      <SportsWidget
        fixturesCalender={defaultFixtureDetails}
        clubsStandingsTable={clubsStandingsTable}
        focusFixture={focusFixture}
      />
      {newPost && <NewPost postItems={newPost} />}
      {trendyPost && <TrendyPost postItems={trendyPost} />}
      <Weather />
      {topPost && <TopPost postItems={topPost} />}
    </Layout>
  );
}

export default Home;
