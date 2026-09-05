import React from "react";
import "./actionCard.css";
import { Link, useNavigate } from "react-router-dom";
function ActionCard() {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("auth");
    navigate("/");
    console.log("logging out");
  }
  return (
    <div className="actionCardContainer">
      <Link className="actionCardActions" to="./myProfile">
        View My Profile
      </Link>
      <button className="actionCardActions" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}

export default ActionCard;
