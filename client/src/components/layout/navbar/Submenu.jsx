import React from "react";
import { Link } from "react-router-dom";
import "./submenu.css";

function Submenu({
  submenuItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  slug = "home",
}) {
  return (
    <div className="submenuContainer">
      {submenuItems.map((item, index) => (
        <Link key={index} to={`/${slug}/${item.toLowerCase()}`}>
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Submenu;
