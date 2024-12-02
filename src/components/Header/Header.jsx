// Importing required dependencies and assets
import React from "react";
import Netflixlogo from "../../assets/images/NetflixLogo.png";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Functional component for the Header section
const Header = () => {
  return (
    <>
      {/* Header container */}
      <div className="header-outer-container">
        <div className="header-container">
          {/* Left side of the header containing navigation links */}
          <div className="left-header">
            <ul>
              <li className="logo">
                {/* Netflix logo */}
                <img src={Netflixlogo} width="100" />
              </li>
              {/* Navigation menu */}
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Brwose by Language</li>
            </ul>
          </div>
          {/* Right side of the header containing user-related icons */}
          <div className="right-header">
            <ul>
              <li>
                {/* Search icon */}
                <SearchIcon />{" "}
              </li>
              <li>
                {/* Notifications icon */}
                <NotificationsNoneIcon />
              </li>
              <li>
                {/* Account icon */}
                <AccountBoxIcon />
              </li>
              <li>
                {/* Dropdown icon */}
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Exporting Header component
export default Header;
