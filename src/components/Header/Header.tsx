import React from "react";
import {
  BrandInstagram,
  BrandFacebook,
  BrandTwitter,
} from "tabler-icons-react";

import { SimpleButton } from "../Buttons";
import NavBar from "../NavBar/NavBar";

import "./styles.css";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* <div className="headerContainer">
          <div className="leftSide">
            <div className="emailSection">
              Free Call:
              <span className="email">24824-243342-23</span>
            </div>
          </div>
          <div className="rightSide">
            <div className="emailSection">
              Email Address:
              <span className="email">buildream@info.com</span>
            </div>

            <SimpleButton onClick={() => null} className="socialButton">
              <BrandInstagram color="#fdc723" size={20} />
            </SimpleButton>

            <SimpleButton onClick={() => null} className="socialButton">
              <BrandFacebook color="#fdc723" size={20} />
            </SimpleButton>

            <SimpleButton onClick={() => null} className="socialButton">
              <BrandTwitter color="#fdc723" size={20} />
            </SimpleButton>
          </div>
        </div> */}

        <NavBar />
      </div>
      <div className="placeholderBlock" />
    </>
  );
};

export default Header;
