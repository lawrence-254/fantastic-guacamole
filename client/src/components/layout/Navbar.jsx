import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";

import Submenu from "./navbar/submenu";
import ActionCard from "./navbar/ActionCard";

import logo from "../../assets/navbar/MEGA.news.svg";
import arrowDown from "../../assets/navbar/arrowDown.svg";
import threeDots from "../../assets/navbar/3VerticalDots.svg";
import searchIcon from "../../assets/navbar/searchIcon.svg";
import menuIcon from "../../assets/navbar/menuIcon.svg";
import profileAvatar from "../../assets/navbar/profileAvatar.svg";
import dropDownIcon from "../../assets/navbar/dropDownIcon.svg";
import bookmarkIcon from "../../assets/navbar/bookmarkIcon.svg";

const user = {
  aviPic: profileAvatar,
  firstname: "behzad",
};
const userIsLoggedIn = false;
const categoriesList = [
  "cat1",
  "cat2",
  "cat3",
  "cat4",
  "cat5",
  "cat6",
  "cat7",
  "cat8",
  "cat9",
  "cat0",
];

const pageList = [
  "page1",
  "page2",
  "page3",
  "page4",
  "page5",
  "page6",
  "page7",
  "page8",
  "page9",
  "page0",
];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", e.target.querySelector("input").value);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <div className="menuArea">
          <Link to="/" className="title">
            TechWitter
          </Link>
        </div>
        <ListMenu activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
        {/* <div className="smallScreenProfileArea">
          {userIsLoggedIn ? (
            <ProfileArea />
          ) : (
            <Link
              style={{
                textDecoration: "none",
                background: "none",
                border: "solid #fc4308 1px",
                color: "#fc4308",
                padding: "6px",
                margin: "3px",
                borderRadius: "6px",
              }}
              to="/login"
            >
              LOGIN
            </Link>
          )}{" "}
        </div> */}
      </div>
      <div className="navbarRight">
        <img
          src={menuIcon}
          className="searchBoxMenuIcon"
          alt="Search menu toggle"
        />
        <form className="searchBox" onSubmit={handleSearchSubmit}>
          <img className="threeVerticalDots" src={threeDots} alt="" />
          <input
            className="inputArea"
            type="text"
            placeholder="Search Anything"
          />
          <button
            style={{ border: "none", background: "none" }}
            type="submit"
            className="searchIcon"
          >
            <img src={searchIcon} alt="Search" />
          </button>
        </form>
        <div className="profileSectionContainer">
          {userIsLoggedIn ? (
            <ProfileArea />
          ) : (
            <Link
              style={{
                textDecoration: "none",
                background: "none",
                border: "solid teal 1px",
                color: "teal",
                padding: "6px",
                margin: "3px",
                borderRadius: "6px",
              }}
              to="/login"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

function ProfileArea() {
  const [showActionCard, setShowActionCard] = useState(false);
  function handleDropDownMenuClick() {
    setShowActionCard((prev) => !prev);
  }
  return (
    <div className="profileSection">
      <span className="userSection" onClick={handleDropDownMenuClick}>
        <img
          src={user.aviPic}
          alt={`${user.firstname}'s avatar`}
          className="aviPic"
        />
        <span className="aviName">
          {user.firstname}
          <span>
            <img src={dropDownIcon} alt="Profile dropdown" />
          </span>
        </span>
      </span>

      {showActionCard && <ActionCard />}
      <Link to="/profileMarked">
        <img src={bookmarkIcon} className="iconSection" alt="Bookmarks" />
      </Link>
    </div>
  );
}

function ListMenu({ activeMenu, handleMenuClick }) {
  return (
    <ul className="menuItems">
      <li onClick={() => handleMenuClick("categories")}>
        categories
        <span>
          <img src={arrowDown} alt="Categories dropdown" />
        </span>
        {activeMenu === "categories" && (
          <>
            <div className="redHorizontalRectangle"></div>
            <Submenu submenuItems={categoriesList} slug="category" />
          </>
        )}
      </li>
      <li onClick={() => handleMenuClick("pages")}>
        pages
        <span>
          <img src={arrowDown} alt="Pages dropdown" />
        </span>
        {activeMenu === "pages" && (
          <>
            <div className="redHorizontalRectangle"></div>
            <Submenu submenuItems={pageList} slug="page" />
          </>
        )}
      </li>
      <Link className="liveLink" to="/contact">
        contact us
      </Link>
      <Link className="liveLink" to="/about">
        about us
      </Link>
    </ul>
  );
}
