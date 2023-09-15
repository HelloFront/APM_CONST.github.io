import React from "react";
import { useNavigate } from "react-router-dom";

import { APP_PAGES } from "../../constants/appPages";
import "./style.css";

const Remodeling = () => {
  const navigate = useNavigate();

  const goToContacts = () => navigate(APP_PAGES.CONTACTS.path);

  return (
    <div className="remodelingMainContainer">
      <p className="remodelingMainTitle">Our Remodeling services</p>
      <p className="remodelingMainSubText">
        We are provide complete home remodeling, home additions, garage
        conversions and more. If you have an idea, we'd be happy to join you in
        the creative process. We offer home remodeling services in Seattle's
        Eastside neighborhood. We serve Seattle, Kirkland, Kingsgate, Shoreline,
        Redmond, Bothell, Sammamish, Issaquah, and Mercer Island.
      </p>

      <div className="leftSideMainContainer">
        <div className="leftSideItem">
          <div className="leftSideTextContainer">
            <p className="leftSideItemTitle">Kitchen Remodels</p>
            <p className="leftSideItemDescription">
              The kitchen is the heart of every home. We love reimagining and
              creating these spaces with our clients. <br />
              <br /> We help design your dream kitchen with cabinetry to fit
              your style, and countertops and backsplash to add flare. We walk
              you through floor plan options to create a more efficient
              workspace that suits your needs while ensuring quality and beauty
              are not compromised.
            </p>
          </div>
        </div>

        <div className="leftSideItem">
          <div className="leftSideTextContainer">
            <p className="leftSideItemTitle">Bathroom Remodels</p>
            <p className="leftSideItemDescription">
              When renovating your bathroom we maximize space and storage while
              staying true to your individual style. With lighting, tile, and
              layout updates, we help create a spa-like experience that’s both
              functional and beautiful. <br />
              <br />
              People seem to get very excited about remodeling a bathroom. The
              transformation is often remarkable. A well designed bathroom will
              be enjoyed at the start and end to each day. <br /> <br />
              The problem is however that the process can get overwhelming with
              so many style and price options for fixtures, tiles, wall
              coverings, cabinets and all the other details that go into a
              quality project. With the help of our trusted network of suppliers
              we will assist you in finding the perfect fixtures and finishes to
              compliment your overall vision and keep your project within your
              desired budget.
            </p>
          </div>
        </div>

        <div className="leftSideItem">
          <div className="leftSideTextContainer">
            <p className="leftSideItemTitle">Outdoor living spaces</p>
            <p className="leftSideItemDescription">
              Your yard should be an extension of your home in terms of
              functionality, aesthetics, and a place to bring people together.
              Whether you’re looking to raise the value of your house, create
              more space for family time, or own the ultimate spot for
              entertaining, updating your outdoor living area can truly
              transform your home. services outdoor living space kitchen patio
              new castle wa This outdoor kitchen allows the home owner a chance
              to grill and entertain all year long. <br />
              <br />
              At Home Run Solutions, we craft unique outdoor kitchens,
              bungalows, sunrooms, pool houses, pergolas and more! Our team of
              landscape and outdoor living experts work with you to develop the
              best space for your lifestyle. Do you need room for the little
              ones to enjoy the outside? We can build an outdoor movie theater!
              Do you want to be the best house on the block for barbecues? How
              about an outdoor bar! Our team is creative, and the possibilities
              are endless.
              <br />
              <br />
              Aside from functionality, we also collaborate closely with you to
              ensure the aesthetics match your home for a seamless transition of
              outdoor and indoor living. We work with all styles and flair so
              your space feels like yours. <br />
              <br />
              Lastly, we know all yards have their own individual elements, and
              we want to highlight the best aspects of yours. Do you have an
              expansive view? Let’s consider an elevated deck and dining space
              to enjoy it. Do you have a unique tree in the center of your yard?
              Let’s see how we can incorporate it. Enjoy your life inside and
              outside your home today!
            </p>
          </div>
        </div>
      </div>

      <div className="estimateButtonContainer">
        <button onClick={goToContacts} className="getEstimateButton">
          GET A FREE ESTIMATE
        </button>
      </div>
    </div>
  );
};

export default Remodeling;
