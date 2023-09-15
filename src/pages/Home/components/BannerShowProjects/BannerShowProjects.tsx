import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { APP_PAGES } from "../../../../constants/appPages";

const BannerShowProjects = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(APP_PAGES.GALLERY.path)}
      className="bannerShowProjectsContainer"
    >
      <p className="bannerShowProjectsText">Show all our projects</p>
    </button>
  );
};

export default BannerShowProjects;
