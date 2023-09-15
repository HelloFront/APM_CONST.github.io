import React from "react";

import "./style.css";

const CompanyLogo = ({ onClick }) => {
  return (
    <div className="companyLogoContainer" onClick={onClick}>
      <div className="companyNameContainer">
        <div className="companyNameInnerContainer">
          <div className="companyNameSvgContainer">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              width={32}
              height={32}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m22 8c0-.478-.379-1-1-1h-13c-.62 0-1 .519-1 1v13c0 .621.52 1 1 1h13c.478 0 1-.379 1-1zm-13.5.5h12v12h-12zm-2.5-2.5h13.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13.75c-.53 0-1 .47-1 1v13.75c0 .414.336.75.75.75s.75-.336.75-.75zm-2.5-2.5h13.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.25c-.53 0-1 .47-1 1v14.25c0 .414.336.75.75.75s.75-.336.75-.75z"
                fill-rule="nonzero"
              />
            </svg>
            <div className="companyNameVerticalLine" />
          </div>
          <div>
            <p className="companyTopName">APM</p>
            <p className="companySecondaryName">Construction</p>
            <p className="companySloganName">Construction LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
