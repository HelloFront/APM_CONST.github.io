import React from "react";

import { MOCK_DATA_SERVICE_PAGES } from "../../constants/mock";
import { ServicePage } from "../../components";

const FirePlaces = () => {
  return (
    <ServicePage
      pageTitle={MOCK_DATA_SERVICE_PAGES.FIRE_PLACES.pageTitle}
      imageSource={MOCK_DATA_SERVICE_PAGES.FIRE_PLACES.imageSourse}
      description={MOCK_DATA_SERVICE_PAGES.FIRE_PLACES.description}
    />
  );
};

export default FirePlaces;
