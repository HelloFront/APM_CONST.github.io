import React, { useEffect } from "react";

import "./style.css";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="galleryMainContainer">
      <h1 className="galleryTitle">Our projects</h1>

      <div className="galleryItemsContainer">
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
        <div className="galleryItem">
          <img src={require("../../assets/images/tile_floor.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
