import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";

import twitterIcon from "../../assets/footer/twitterIcon.svg";
import instagramIcon from "../../assets/footer/instagramIcon.svg";
import emailIcon from "../../assets/footer/emailIcon.svg";

import topLeft from "../../assets/footer/instagrid/topLeft.svg";
import topCentre from "../../assets/footer/instagrid/topCentre.svg";
import topRight from "../../assets/footer/instagrid/topRight.svg";
import middleLeft from "../../assets/footer/instagrid/middleLeft.svg";
import middleCentre from "../../assets/footer/instagrid/middleCentre.svg";
import middleRight from "../../assets/footer/instagrid/middleRight.svg";
import bottomLeft from "../../assets/footer/instagrid/bottomLeft.svg";
import bottomCentre from "../../assets/footer/instagrid/bottomCentre.svg";
import bottomRight from "../../assets/footer/instagrid/bottomRight.svg";

const MegaNewsExplanation = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin`;
const Categories = [
  "culture",
  "fashion",
  "featured",
  "food",
  "healthy living",
  "technology",
];

const Comments = [
  {
    author: "ellsmartx",
    comment: `how nice does this look 😍 I feel it should be delicious, thank you
`,
  },
  {
    author: "cassia",
    comment: `Take a rest, i'll be cheer up you again in 2 next game go go go`,
  },
  {
    author: "amanda",
    comment: `you were stunning today, jan! 💗 great match 👍🏽👍🏽`,
  },
  {
    author: "Denis Simonassi",
    comment: `It was a great match today Janzi! You did great😉🇩🇪`,
  },
];

const InstagramImageGallery = [
  { image: topLeft, link: "/" },
  { image: topCentre, link: "/" },
  { image: topRight, link: "/" },
  { image: middleLeft, link: "/" },
  { image: middleCentre, link: "/" },
  { image: middleRight, link: "/" },
  { image: bottomLeft, link: "/" },
  { image: bottomCentre, link: "/" },
  { image: bottomRight, link: "/" },
];
function Footer() {
  const [form, setForm] = useState({
    subscriberEmail: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      subscriberEmail: form.subscriberEmail,
    };

    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <div className="footerContainer">
      <div className="leftFooter">
        <div className="topLeftFooter">
          <div className="leftLeftFooterContainer">
            <div className="megaNews">
              <div className="footerTitle">
                <div className="redVerticalRectangle"></div>Mega News
              </div>
              <div className="footerExplanation">{MegaNewsExplanation}</div>
            </div>
            <div className="newsletters">
              <div className="footerTitle">
                <div className="redVerticalRectangle"></div>Newsletters
              </div>
              <form onSubmit={handleSubmit} className="inputSection">
                <input
                  type="email"
                  name="subscriberEmail"
                  onChange={handleChange}
                  placeholder="write your email"
                />
                <img src={emailIcon} />
              </form>
            </div>
          </div>
          <div className="rightLeftFooterContainer">
            <div className="categories">
              <div className="footerTitle">
                <div className="redVerticalRectangle"></div>Categories
              </div>
              <ul className="categoryArea">
                {Categories.map((item, index) => (
                  <Link
                    className="nonStyledLinked categoryLink"
                    key={index}
                    to={`/${item.toLowerCase()}`}
                  >
                    <li className="nonStyledList categoryList">{item}</li>
                  </Link>
                ))}{" "}
              </ul>
            </div>
            <div className="socialNetwork">
              <div className="footerTitle">
                <div className="redVerticalRectangle"></div>SocialNetwork
              </div>
              <div className="socialNetworksContainer">
                {" "}
                <Link className="nonStyledLinked" to="/b">
                  <button className="instagramButton">
                    <img src={instagramIcon} /> instagram
                  </button>
                </Link>
                <Link className="nonStyledLinked" to="/">
                  <span className="twitterIcon">
                    <img src={twitterIcon} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyrightLeft">
            privacy policy | terms & conditions
          </div>
          <div className="copyrightRight">all copyright (c) 2022 reserved</div>
        </div>
      </div>
      <div className="rightFooter">
        <div className="newComments">
          <div className="footerTitle">
            <div className="redVerticalRectangle"></div>new comments
          </div>
          <div className="commentContainer">
            {Comments.map((item, index) => (
              <div
                key={index}
                className="nonStyledList categoryList commentBox"
              >
                <h5>{item.author}</h5>
                <p>{item.comment.slice(0, 40)}</p>
              </div>
            ))}{" "}
          </div>
        </div>
        <div className="instagramAccount">
          <div className="footerTitle">
            <div className="redVerticalRectangle"></div>follow on instagram
          </div>
          <div className="instagramPhoto">
            {InstagramImageGallery.map((item, index) => (
              <img
                className="imagesInGallery"
                key={index}
                src={item.image}
                alt={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
