import React from "react";
import { useNavigate } from "react-router-dom";

import { IService } from "../../types/project";
import "./styles.css";

interface IProps {
  plan: IService;
}

const ProjectPlanCard = ({ plan }: IProps) => {
  const navigate = useNavigate();

  const { imageSourse, name } = plan;

  const GoToPage = (path: string) => navigate(path);

  return (
    <div className="projectPlanContainer">
      <img
        className="projectPlanImage"
        src={imageSourse}
        alt="projectPlanImage"
      />
      <div className="projectPlanBottomContainer">
        <p className="projectPlanName">{name}</p>

        <div className="planButtonBlock">
          <button
            onClick={() => GoToPage(plan.path)}
            className="projectPlanButton"
          >
            DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanCard;
