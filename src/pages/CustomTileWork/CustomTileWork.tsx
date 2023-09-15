import React from "react";

import { MOCK_DATA_SERVICE_PAGES } from "../../constants/mock";
import { ServicePage } from "../../components";

const CustomTileWork = () => {
  return (
    <ServicePage
      pageTitle={MOCK_DATA_SERVICE_PAGES.CUSTOM_TILE_WORK.pageTitle}
      imageSource={MOCK_DATA_SERVICE_PAGES.CUSTOM_TILE_WORK.imageSourse}
      description={MOCK_DATA_SERVICE_PAGES.CUSTOM_TILE_WORK.description}
    />
  );
};

export default CustomTileWork;
