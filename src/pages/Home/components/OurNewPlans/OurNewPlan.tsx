import React, { useContext } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { v4 } from "uuid";

import { ProjectPlanCard } from "../../../../components";
import { FirebaseContext } from "../../../../context";
import "./styles.css";

const OurNewPlan = () => {
  const { services } = useContext(FirebaseContext);

  if (!services.length) {
    return (
      <div className="magnifyingGlass">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          glassColor="#edf6ff"
          color="#000"
        />
      </div>
    );
  }

  return (
    <div className="ourNewPlanContainer">
      <div className="ourNewPlanInfoContainer">
        <p className="ourNewPlanTitle">
          We offer a variety of options to meet your needs.
        </p>
        <p className="ourNewPlanSubTitle">Select Service</p>
      </div>

      <div className="ourNewPlanCardContainer">
        {services.map((plan: any) => (
          <ProjectPlanCard key={v4()} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default OurNewPlan;
