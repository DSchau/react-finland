import React from "react";

const Header = ({ pathname, logo }) => (
  <header className={pathname === "/" ? "index" : ""}>
    <div className="header-container container">
      <div className="logo">
        <img src={logo} width={200} height={200} alt="React Finland logo" />
      </div>
      <a href="/" className="rubric site-name">
        <span className="text-rf-white">React </span>
        <span className="text-rf-blue">Finland</span>
      </a>
      <h1>One workshop day + two days of talks</h1>
      <h3>Your chance to learn more about React up north</h3>
      <h3>Helsinki (24-26.4.2018)</h3>
      <div className="buy">
        <a href="/#tickets" className="buy-button">
          Buy tickets now!
        </a>
      </div>
    </div>
  </header>
);

export default Header;
