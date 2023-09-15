import React from "react";
import { v4 } from "uuid";

import { ProjectCard } from "../../../../components";
import { MOCK_DATA_LAST_PROJECTS } from "../../../../constants/mock";
import "./styles.css";

const OurLastProjects = () => {
  return (
    <div className="ourLastProjectsContainer">
      <div className="ourLastProjectsInfoContainer">
        <p className="ourLastProjectsTitle">
          Whatever you dream, we’ll help you achieve it.
        </p>
        <p className="ourLastProjectsSubTitle">Our Recent Work</p>
      </div>

      <div className="ourLastProjectCardContainer">
        {MOCK_DATA_LAST_PROJECTS.map(card => (
          <ProjectCard key={v4()} card={card} />
        ))}
      </div>
    </div>
  );
};

export default OurLastProjects;
