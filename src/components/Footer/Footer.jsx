// Importing React library
import React from "react";
// Importing Material UI icons for social media
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Importing the CSS file for styling the footer component
import "./footer.css";

// Functional component for the Footer section
const Footer = () => {
  return (
    <>
      {/* Outer container for the footer */}
      <div className="footer_outer_container">
        {/* Inner container to structure footer content */}
        <div className="footer_inner_container">
          {/* Social media icons section */}
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>

          {/* Footer data section */}
          <div className="footer_data">
            <div>
              <ul>
                {/* Links for accessibility and legal information */}
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                {/* Links for support, jobs, and user preferences */}
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                {/* Links for services and corporate information */}
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                {/* Links for media and contact options */}
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Service code section */}
          <div className="service_code">
            <p>Service Code</p>
          </div>

          {/* Copyright text */}
          <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
};

// Exporting Footer component for use in other parts of the app
export default Footer;
