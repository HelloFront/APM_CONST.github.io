import React from "react";

import Navigation from "./navigation/index";
import { FirebaseContextProvider } from "./context";
import "./custom.css";

const App = () => {
  return (
    <FirebaseContextProvider>
      <Navigation />
    </FirebaseContextProvider>
  );
};

export default App;
