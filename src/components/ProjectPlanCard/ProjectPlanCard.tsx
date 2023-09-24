import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IService } from "../../types/project";
import "./styles.css";

interface IProps {
  plan: IService;
}

const ImageComponent = ({ img }) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <>
      <img
        className={imgLoading ? "projectPlanImage" : "invisibleImg"}
        src={require("../../assets/images/SM-placeholder.png")}
        alt="projectPlanImage"
      />
      <img
        className={imgLoading ? "invisibleImg" : "projectPlanImage"}
        src={img}
        alt="projectPlanImage"
        onLoad={() => setImgLoading(false)}
      />
    </>
  );
};

const ProjectPlanCard = ({ plan }: IProps) => {
  const navigate = useNavigate();

  const { img, title } = plan;

  const GoToPage = (path: string) => navigate(path);

  return (
    <div className="projectPlanContainer">
      <ImageComponent img={img} />
      <div className="projectPlanBottomContainer">
        <p className="projectPlanName">{title}</p>

        <div className="planButtonBlock">
          <button
            onClick={() => GoToPage(plan.path)}
            className="projectPlanButton"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanCard;
