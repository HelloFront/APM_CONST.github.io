import React from "react";

import { MOCK_DATA_SERVICE_PAGES } from "../../constants/mock";
import { ServicePage } from "../../components";

const KitchenBacksplashes = () => {
  return (
    <ServicePage
      pageTitle={MOCK_DATA_SERVICE_PAGES.KITCHEN_BACKSPLASHES.pageTitle}
      imageSource={MOCK_DATA_SERVICE_PAGES.KITCHEN_BACKSPLASHES.imageSourse}
      description={MOCK_DATA_SERVICE_PAGES.KITCHEN_BACKSPLASHES.description}
    />
  );
};

export default KitchenBacksplashes;
