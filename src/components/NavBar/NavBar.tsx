import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { X, Menu2 } from "tabler-icons-react";

import { PAGES, SERVICES_DROPDOWN } from "../../navigation/pages";
import { CompanyLogo, DropDown } from "..";
import "./styles.css";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const getSlideBarIconColor = (itemPathname: string) =>
    pathname === itemPathname ? "#FFA62B" : "#FFFFFF";

  const ARRAY_SERVICES_DROPDOWN_PATHNAME = SERVICES_DROPDOWN.map(
    item => item.path,
  );

  const goBackToMainPage = () => {
    setDropdown(false);
    setSideBar(false);
    navigate(PAGES[0].path);
  };

  const isActiveTab = (pathName: string) => {
    return SERVICES_DROPDOWN.some(item => {
      return item.path === pathName;
    });
  };

  const handleResize = () => {
    if (window.innerWidth < 680) {
      setIsMobile(true);
      setSideBar(false);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setDropdown(false);
    setSideBar(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  useEffect(() => {
    handleResize();
    window.scrollTo(0, 0);
  }, []);

  const isTouchScreenDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="navBarContainer">
      <CompanyLogo onClick={goBackToMainPage} />

      {!isMobile && (
        <div className="navBarLinks">
          {PAGES.map(page => {
            if (page.name === "Services") {
              return (
                <Link
                  key={v4()}
                  to={!isTouchScreenDevice && SERVICES_DROPDOWN[0].path}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  onClick={() =>
                    isTouchScreenDevice ? setDropdown(true) : null
                  }
                >
                  <div
                    className={`navBarLink ${
                      isActiveTab(pathname) && "active"
                    }`}
                  >
                    <p className="navBarLinkText">{page.name}</p>
                  </div>

                  {dropdown && <DropDown />}
                </Link>
              );
            } else {
              return (
                <Link key={v4()} to={page.path}>
                  <div
                    className={`navBarLink ${
                      pathname === page.path && "active"
                    }`}
                  >
                    <p className="navBarLinkText">{page.name}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      )}

      {isMobile && (
        <div className="sideBarToggle">
          {!sideBar ? (
            <Menu2
              onClick={() => setSideBar(!sideBar)}
              size={40}
              color="#FFA62B"
            />
          ) : (
            <X
              onClick={() => {
                setSideBar(!sideBar);
              }}
              size={40}
              color="#FFA62B"
            />
          )}
        </div>
      )}

      <div className={sideBar ? "sidebar sideBarActive" : "sidebar"}>
        <ul className="sidebar-items">
          {PAGES.map(item => {
            if (item.name === "Services") {
              return (
                <li key={v4()} className={item.sName} onClick={() => null}>
                  <Link
                    to={!isTouchScreenDevice && SERVICES_DROPDOWN[0].path}
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <div className="sideBarItemContainer">
                      <p className="sideBarItemContainerTitle">{item.name}</p>
                      <div>
                        <item.icon
                          color={
                            ARRAY_SERVICES_DROPDOWN_PATHNAME.includes(pathname)
                              ? "#FFA62B"
                              : "#FFFFFF"
                          }
                          strokeWidth={1}
                          size={38}
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  key={v4()}
                  className={item.sName}
                  onClick={() => setSideBar(!sideBar)}
                >
                  <Link to={item.path}>
                    <div className="sideBarItemContainer">
                      <p className="sideBarItemContainerTitle">{item.name}</p>
                      <div>
                        <item.icon
                          color={getSlideBarIconColor(item.path)}
                          strokeWidth={1}
                          size={38}
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <div
          className={
            dropdown ? "sideBarSubMenu sideBarSubMenuActive" : "sideBarSubMenu"
          }
        >
          <ul className={"sideBarSubMenuItems"}>
            {SERVICES_DROPDOWN.map(item => {
              return (
                <li className="sidebar-item" key={v4()}>
                  <Link to={item.path}>
                    <p className="dropDownItemContainerTitle">{item.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
