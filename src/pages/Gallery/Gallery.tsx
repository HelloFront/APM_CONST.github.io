import React, { useEffect, useContext } from "react";

import "./style.css";
import { FirebaseContext } from "../../context";

const Gallery = () => {
  const { projects } = useContext(FirebaseContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="galleryMainContainer">
      <div className="galleryTitleContainer">
        <h1 className="galleryTitle">Look at our last projects</h1>
      </div>

      <div className="galleryItemsContainer">
        {projects.map((projectCard: any) => {
          return (
            <div className="galleryItem" key={projectCard.id}>
              <div className="galleryItemImgContainer">
                <img src={projectCard.img} alt={projectCard.title} />
              </div>

              <div className="galleryInfoContainer">
                <p className="galleryItemTitle">{projectCard.title}</p>
                <p className="galleryItemDescription">
                  {projectCard.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
