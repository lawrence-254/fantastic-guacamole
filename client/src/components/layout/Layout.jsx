import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./layout.css";

function Layout({ children }) {
  return (
    <div className="layoutPage">
      <Navbar />
      <div className="mainAppContainer">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
