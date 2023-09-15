import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { SERVICES_DROPDOWN } from "../../navigation/pages";
import "./style.css";

const DropDown = ( ) => {
  return (
    <ul className={"dropdownSubMenu"}>
      {SERVICES_DROPDOWN.map(item => {
        return (
          <li className={"dropdownMenuItem"} key={v4()}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDown;
