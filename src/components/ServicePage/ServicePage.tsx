import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ServicesGreetingBlock } from "..";
import { APP_PAGES } from "../../constants/appPages";
import "./style.css";

interface IProps {
  pageTitle?: string;
  imageSource?: string;
  description?: string;
  children?: React.JSX.Element;
}

const ServicePage = ({
  pageTitle,
  imageSource,
  description,
  children,
}: IProps) => {
  const navigate = useNavigate();

  const replaceWithBr = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  const goToContacts = () => navigate(APP_PAGES.CONTACTS.path);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicePageBackground">
      <ServicesGreetingBlock />

      <div className="servicePageInfoContainer">
        {imageSource && (
          <div className="servicePageImageContainer">
            <img src={imageSource} className="servicePageImage" />
          </div>
        )}

        {pageTitle && description && (
          <div className="servicePageRightSide">
            <h1 className="servicePageTitle">{pageTitle}</h1>
            <p
              className="servicePageText"
              dangerouslySetInnerHTML={{ __html: replaceWithBr(description) }}
            />
          </div>
        )}
      </div>

      {children}

      <div className="estimateButtonContainer">
        <button onClick={goToContacts} className="estimateButton">
          GET A FREE ESTIMATE
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
