import { useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import CommentForm from "../commentForm/CommentForm";
import RelatedPost from "../relatedPost/RelatedPost";

const Button = ({ title, iconUrl }) => {
  return (
    <div className="buttonContainer">
      <img src={iconUrl} alt={`${title} Icon`} className="buttonIcon" />
      <span className="buttonTitle">{title}</span>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="profileSectionContainer">
      <image src="/images/index/resources/linda.png" className="leftProfile" />
      <div className="middleProfile">
        <h1 className="nameArea">Louis Hoebregts</h1>
        <button className="followButton">+ Follow</button>
      </div>
      <div className="rightProfile">
        <p>27 post</p>
      </div>
    </div>
  );
};

const TagSection = () => {
  const TagList = ({ item }) => {
    return <li className="tagListItem">{item}</li>;
  };

  const listItems = [
    "Montenegro",
    "Visit Croatia",
    "Luxury Travel",
    "Travel Log",
    "Paradise Islands",
    "Travel Info",
  ];
  return (
    <div className="tagSectionContainer">
      <div className="tagHeaderSection">
        <div className="tagHeaderRectangle"></div>
        <span className="tagHeaderTitle">Tags</span>
      </div>
      <div className="tagList">
        {listItems.map((i) => (
          <TagList key={i} item={i} />
        ))}
      </div>
    </div>
  );
};

const Advertising = ({ title, subTitle, background = "#f5f5f5" }) => {
  return (
    <div className="advertisingContainer" style={{ background: background }}>
      <div className="advertContent">
        <h1 className="advertTitle">{title}</h1>
        <h3 className="subTitle">{subTitle}</h3>
      </div>
    </div>
  );
};

const LatestVideosPostCard = ({ imageUrl, postTitle, description }) => {
  return (
    <div className="latestVideosPostCard">
      <div className="latestVideosPostCardImage">
        <img src={imageUrl} alt={postTitle} />
      </div>
      <div className="latestVideosPostCardDetails">
        <h3 className="latestVideosPostCardTitle">{postTitle}</h3>
        <p className="latestVideosPostCardDescription">{description}</p>
      </div>
    </div>
  );
};

const SideBar = () => {
  const buttonInfo = {
    share: {
      iconUrl: "/images/single/share.png",
      title: "Share",
    },
    marking: {
      iconUrl: "/images/single/bookmark.png",
      title: "Marking",
    },
    comment: {
      iconUrl: "/images/single/message.png",
      title: "Comment",
    },
  };

  const videoPosts = [
    {
      imageUrl: "/images/topPost2.png",
      postTitle:
        "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      description: "Subhead",
    },
    {
      imageUrl: "/images/topPost3.png",
      postTitle:
        "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      description: "Subhead",
    },
    {
      imageUrl: "/images/topPost4.png",
      postTitle:
        "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      description: "Subhead",
    },
    {
      imageUrl: "/images/topPost5.png",
      postTitle:
        "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      description: "Subhead",
    },
    {
      imageUrl: "/images/topPost6.png",
      postTitle:
        "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      description: "Subhead",
    },
  ];
  return (
    <div className="sidebarContainer">
      <div className="topSidebarHeader">
        <div className="topSidebarProfileDetails">
          <div className="sidebarHeader">
            {Object.entries(buttonInfo).map(([key, { iconUrl, title }]) => (
              <Button key={key} iconUrl={iconUrl} title={title} />
            ))}
          </div>
          <ProfileSection />
        </div>
        <TagSection />
      </div>
      <div className="sidebarTopPost">
        <div className="tagHeaderSection">
          <span className="tagHeaderRectangle"></span>
          <span className="tagHeaderTitle">Top Post</span>
        </div>
        {videoPosts.map((post, index) => (
          <Link key={index} to="/single" className="linkStyle">
            <LatestVideosPostCard
              key={index}
              imageUrl={post.imageUrl}
              postTitle={post.postTitle}
              description={post.description}
            />
          </Link>
        ))}
      </div>
      <div className="advertSection">
        <Advertising
          title={"Advertising"}
          subTitle={"ad"}
          background={`url('/images/ad1.png')`}
        />
        <Advertising
          title={"Advertising"}
          subTitle={"ad2"}
          background={`url('/images/ad2.png')`}
        />
      </div>
    </div>
  );
};

const TopContent = ({
  title = "How to Spend the Perfect Day on Croatia’s Most Magical Island",
  imageUrl = "/images/single/topContentImage.png",
}) => {
  return (
    <div className="topContentContainer">
      <h1 className="topContentTitle">{title}</h1>
      <img src={imageUrl} alt={title} className="topContentImage" />
    </div>
  );
};

const ExtraInformation = () => {
  return (
    <div className="xtraInfoContainer">
      <div className="xtraInfoDate">
        <img
          className="xtraInfoDateIcon"
          src="/images/single/calendarIcon.png"
        />
        <span>July 14, 2022</span>
      </div>
      <div className="xtraInfoComment">
        <img
          className="xtraInfoCommentIcon"
          src="/images/single/commentIcon.png"
        />
        <span>Comments: 35</span>
      </div>
      <div className="xtraInfoCategory">
        <img
          className="xtraInfoCategoryIcon"
          src="/images/single/categoryIcon.png"
        />
        <span>
          Category: <span className="xtraInfoCategorySpan">Sport</span>
        </span>
      </div>
    </div>
  );
};

const BottomContent = () => {
  const title1 = "Don’t wait. The purpose of our lives is to be happy!";
  const title2 = "Not how long, but how well you have lived is the main thing.";
  const p1 = `Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass oil used to clean the natural wood found throughout the room, creating a relaxing atmosphere within the space.
A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.`;
  const p2 = `When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can experience the ever-changing undersea environment.
Not only do visitors to a bed and breakfast get a unique perspective on the place they are visiting, they have options for special packages not available in other hotel settings. Bed and breakfasts can partner easily with local businesses for a smoothly organized and highly personalized vacation experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance.
Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to create a complete experience. For example, the Fife and Drum retains the colonial feel of the area in all its guest rooms. Special features include antique furnishings, elegant four poster beds in some guest rooms, as well folk art and artifacts from the restoration period of the historic area available for guests to enjoy.`;
  return (
    <div className="bottomContentContainer">
      <h1 className="bottomContentTitle">{title1}</h1>
      <p className="bottomContentParagraph">{p1}</p>
      <img
        className="bottomContentImage"
        src="/images/single/bottomContentImage.png"
      />
      <h1 className="bottomContentTitle">{title2}</h1>
      <p className="bottomContentParagraph">{p2}</p>
    </div>
  );
};
const CommentComponent = ({
  userImageUrl,
  userName,
  date = "July 14, 2022",
  commentText = "This is a sample comment.",
  embeddedComments = [],
}) => {
  const [showEmbeddedComments, setShowEmbeddedComments] = useState(false);

  const toggleEmbeddedComments = () => {
    setShowEmbeddedComments((prev) => !prev);
  };

  return (
    <div className="commentComponentContainer">
      <div className="commentComponentContainerTop">
        <div className="commentComponentContainerTopLeft">
          <img
            className="commentComponentContainerTopLeftUserImage"
            src={userImageUrl}
            alt={`${userName}'s profile`}
          />
          <div className="subContainer">
            <p className="commentComponentContainerTopLeftUserName">
              {userName}
            </p>
            <div className="commentDateContainer">
              <img
                className="commentComponentContainerTopLeftDateIcon"
                src="/images/single/calendarIcon.png"
                alt="Calendar Icon"
              />
              <span className="commentDate">{date}</span>
            </div>
          </div>
        </div>
        <div className="commentComponentContainerTopRight">
          <button className="replyButton">
            <img
              className="replyButtonIcon"
              src="/images/single/replyIcon.png"
              alt="Reply Icon"
            />
            <span className="replyButtonTitle">Reply</span>
          </button>
        </div>
      </div>
      <div
        className="commentComponentContainerText"
        onClick={toggleEmbeddedComments}
      >
        <p>{commentText}</p>
      </div>
      {showEmbeddedComments && (
        <div className="embeddedCommentsContainer">
          {embeddedComments.length > 0 ? (
            embeddedComments.map((comment, index) => (
              <CommentComponent
                key={index}
                userImageUrl={comment.userImageUrl}
                userName={comment.userName}
                date={comment.date}
                commentText={comment.commentText}
              />
            ))
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
};

const Comment = () => {
  const comments = [
    {
      userImageUrl: "/images/single/user/04.png",
      userName: "Patricia",
      date: "July 14, 2022",
      commentText: `An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys.`,
    },
    {
      userImageUrl: "/images/users/user2.png",
      userName: "Jane Smith",
      date: "July 14, 2022",
      commentText: "I completely agree with the points mentioned here.",
    },
  ];
  return (
    <div className="commentContainer">
      <div className="commentTitleSection">
        <div className="smallRedBullet"></div>
        <span className="commentMainTitle">Comments</span>
      </div>
      <CommentComponent
        userImageUrl="/images/single/user/04.png"
        userName="Patricia"
      />
      {comments.map((comment, index) => (
        <CommentComponent
          key={index}
          userImageUrl={comment.userImageUrl}
          userName={comment.userName}
          date={comment.date}
          commentText={comment.commentText}
        />
      ))}
    </div>
  );
};
const TopPart = () => {
  return (
    <div className="topPartMainContainer">
      <div className="topPartLeft">
        <TopContent />
        <ExtraInformation />
        <BottomContent />
      </div>
      <div className="topPartRight">
        <SideBar />
      </div>
    </div>
  );
};
const LeftSide = () => {
  return (
    <div className="leftSideContainer">
      <TopPart />
      <Comment />
      <CommentForm formTitle="Comment" />
      <RelatedPost />
    </div>
  );
};

const Main = () => {
  return (
    <div className="mainContainer">
      <LeftSide />
    </div>
  );
};

export default Main;
