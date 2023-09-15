import React from "react";
import { Routes, Route } from "react-router-dom";
import { v4 } from "uuid";

import { Header } from "../components";
import { NAVIGATION_ROUTES } from "./pages";

const Navigation = () => {
  const PAGES_ROUTES = NAVIGATION_ROUTES.map(page => (
    <Route key={v4()} path={page.path} element={<page.component />} />
  ));

  return (
    <>
      <Header />
      <Routes>{PAGES_ROUTES}</Routes>
    </>
  );
};

export default Navigation;
