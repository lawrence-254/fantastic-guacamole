import React from "react";
import { Link } from "react-router-dom";
import "./aboutUsParent.css";
import BreadCrumb from "../../misceleneous/breadCrumb/BreadCrumb";
import Map from "../aboutUsMap/Map";

const VideoPlayer = ({ src, backgroundImage }) => {
  return (
    <div
      className="aboutUsVideoPlayerWrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <video
        width="100%"
        height="100%"
        controls
        style={{
          borderRadius: "10px",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const AboutUsTop = ({ title, paragraph }) => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsTitle">{title}</div>
      <div className="aboutUsContent">
        <div className="aboutUsContentLeft">{paragraph}</div>
        <div className="aboutUsContentRight">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};
const AboutUsMiddle = ({ email, phoneNumber, fax, address, coordinates }) => {
  return (
    <div className="aboutUsMiddleContainer">
      <div className="aboutUsMiddleContentLeft">
        <Map lat={coordinates.latitudes} lng={coordinates.longitudes} />
      </div>
      <div className="aboutUsMiddleContentRight">
        <div className="aboutUsMiddleTitleSection">
          <div className="titleWithRedDot">
            <div className="smallRedBullet"></div>
            Mega News Information
          </div>
        </div>
        <div className="aboutUsMiddleContentEmail">
          <span className="aboutUsMiddleContentEmailIcon">
            <img src="/images/email-icon.png" />
            email : {email}
          </span>
        </div>
        <div className="aboutUsMiddleContentEmail">
          <span className="aboutUsMiddleContentEmailIcon">
            <img src="/images/phone-icon.png" />
            Phone number : {phoneNumber}
          </span>
        </div>
        <div className="aboutUsMiddleContentEmail">
          <span className="aboutUsMiddleContentEmailIcon">
            <img src="/images/fax-icon.png" />
            fax : {fax}
          </span>
        </div>
        <div className="aboutUsMiddleContentEmail">
          <span className="aboutUsMiddleContentEmailIcon">
            <img src="/images/target-icon.png" />
            Address : {address}
          </span>
        </div>
        <div className="aboutUsMiddleContentEmail aboutUsBg">
          <span className="aboutUsMiddleContentEmailIcon">
            <img src="/images/time-icon.png" />
            Responding 24 hours a day, 7 days a week
          </span>
        </div>
      </div>
    </div>
  );
};
const ProfileCard = ({ imageUrl, position, name }) => {
  return (
    <div className="aboutUsProfileCardContainer">
      <div className="aboutUsProfileCardImage">
        <img src={imageUrl} alt="profile image" />
      </div>
      <div className="aboutUsProfileCardText">{position}</div>
      <button className="aboutUsProfileCardButton">{name}</button>
    </div>
  );
};
const AboutUsBottom = ({ team }) => {
  return (
    <div className="aboutUsBottomContainer">
      <div className="aboutUsBottomTitle">
        <div className="titleWithRedDot postAreaTitle">
          <div className="redVerticalRectangle "></div>
          Mega News team
        </div>
      </div>
      <div className="aboutUsBottomContent">
        {team.map((member, index) => (
          <Link
            to={`/profileMarked/${index}`}
            className="nonStyledLinked"
            key={`profile-${index}`}
          >
            <ProfileCard
              key={index}
              imageUrl={member.profilePic}
              position={member.position}
              name={member.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
const AboutUsParent = ({ teamMembers, aboutUs, companyAddress }) => {
  return (
    <div className="AboutUsMainContainer">
      <BreadCrumb pageInfo="About Us" />
      <AboutUsTop title={aboutUs.title} paragraph={aboutUs.paragraph} />
      <AboutUsMiddle
        email={companyAddress.email}
        phoneNumber={companyAddress.phoneNumber}
        address={companyAddress.address}
        fax={companyAddress.fax}
        coordinates={companyAddress.locationCoordinates}
      />
      <AboutUsBottom team={teamMembers} />
    </div>
  );
};

export default AboutUsParent;
