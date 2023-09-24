import React, { useContext } from "react";
import { v4 } from "uuid";

import { ProjectCard } from "../../../../components";
import { FirebaseContext } from "../../../../context";
import "./styles.css";

const OurLastProjects = () => {
  const { projects } = useContext(FirebaseContext);

  const slicedData = projects.slice(0, 3);
  return (
    <div className="ourLastProjectsContainer">
      <div className="ourLastProjectsInfoContainer">
        <p className="ourLastProjectsTitle">
          Whatever you dream, we’ll help you achieve it.
        </p>
        <p className="ourLastProjectsSubTitle">Our Recent Work</p>
      </div>

      <div className="ourLastProjectCardContainer">
        {slicedData.map((card: any) => (
          <ProjectCard key={v4()} card={card} />
        ))}
      </div>
    </div>
  );
};

export default OurLastProjects;
