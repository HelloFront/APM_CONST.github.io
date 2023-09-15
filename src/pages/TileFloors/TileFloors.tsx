import React from "react";

import { MOCK_DATA_SERVICE_PAGES } from "../../constants/mock";
import { ServicePage } from "../../components";

const TileFloors = () => {
  return (
    <ServicePage
      pageTitle={MOCK_DATA_SERVICE_PAGES.TILE_FLOORS.pageTitle}
      imageSource={MOCK_DATA_SERVICE_PAGES.TILE_FLOORS.imageSourse}
      description={MOCK_DATA_SERVICE_PAGES.TILE_FLOORS.description}
    />
  );
};

export default TileFloors;
