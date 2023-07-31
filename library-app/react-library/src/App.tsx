import React from "react";

import "./App.css";
import Navbar from "./layouts/Navbar";
import ExploreTopBooks from "./layouts/ExploreTopBooks";
import Carousel from "./layouts/Carousel";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </React.Fragment>
  );
}

export default App;
