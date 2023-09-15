import React from "react";

import { IProject } from "../../types/project";
import "./styles.css";

interface IProps {
  card: IProject;
}

const ProjectCard = ({ card }: IProps) => {
  const { imageSourse, name } = card;

  return (
    <div className="projectCardContainer">
      <img
        className="projectCardImage"
        src={imageSourse}
        alt="projectCardImage"
      />
      <p className="projectCardName">{name}</p>

      <div className="projectButtonBlock">
        <button className="projectCardButton">More details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
