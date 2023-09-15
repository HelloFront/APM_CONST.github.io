import React from "react";
import { Link } from "react-router-dom";
import { ArrowNarrowRight } from "tabler-icons-react";
import { v4 } from "uuid";

import { APP_PAGES } from "../../../../constants/appPages";
import "./styles.css";

const GreetingBlock = () => {
  return (
    <div className="mainHomeBlock">
      <div className="innerBlock">
        <div className="mainTextContainer">
          <p className="mainText">WE WILL BE HAPPY TO TAKE CARE OF YOUR WORK</p>
        </div>
        <div className="buttons">
          <button className="buttonLinkContact button">
            <Link className="link" key={v4()} to={APP_PAGES.CONTACTS.path}>
              <div className="linkText">Contacts</div>
              <ArrowNarrowRight className="arrowRight" size={16} />
            </Link>
          </button>

          <button className="buttonLinkProject button">
            <Link className="link" key={v4()} to={APP_PAGES.GALLERY.path}>
              <div className="linkText">Our projects</div>
              <ArrowNarrowRight
                className="arrowRight"
                color="#ffffff"
                size={16}
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingBlock;
