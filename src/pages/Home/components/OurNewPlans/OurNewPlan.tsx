import React from "react";
import { v4 } from "uuid";

import { ProjectPlanCard } from "../../../../components";
import { MOCK_DATA_NEW_PLANS } from "../../../../constants/mock";
import "./styles.css";

const OurNewPlan = () => {
  return (
    <div className="ourNewPlanContainer">
      <div className="ourNewPlanInfoContainer">
        <p className="ourNewPlanTitle">
          We offer a variety of options to meet your needs.
        </p>
        <p className="ourNewPlanSubTitle">Select Service</p>
      </div>

      <div className="ourNewPlanCardContainer">
        {MOCK_DATA_NEW_PLANS.map(plan => (
          <ProjectPlanCard key={v4()} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default OurNewPlan;
