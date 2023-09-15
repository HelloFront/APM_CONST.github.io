import React from "react";

import { MOCK_DATA_SERVICE_PAGES } from "../../constants/mock";
import { ServicePage } from "../../components";

const Showers = () => {
  return (
    <ServicePage
      pageTitle={MOCK_DATA_SERVICE_PAGES.SHOWERS.pageTitle}
      imageSource={MOCK_DATA_SERVICE_PAGES.SHOWERS.imageSourse}
      description={MOCK_DATA_SERVICE_PAGES.SHOWERS.description}
    />
  );
};

export default Showers;
