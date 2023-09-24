import React from "react";

import { IProject } from "../../types/project";
import "./styles.css";

interface IProps {
  card: IProject;
}

const ProjectCard = ({ card }: IProps) => {
  const { img, title } = card;

  return (
    <div className="projectCardContainer">
      <img className="projectCardImage" src={img} alt="projectCardImage" />

      <p className="projectCardName">{title}</p>
      <div className="projectButtonBlock">
        <button className="projectCardButton">More details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
