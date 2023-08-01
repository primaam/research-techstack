import React from "react";

import Carousel from "../layouts/Carousel";
import ExploreTopBooks from "../layouts/ExploreTopBooks";
import Heros from "../layouts/Heros";
import LibraryService from "../layouts/LibraryService";

const HomePage = () => {
    return (
        <React.Fragment>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryService />
        </React.Fragment>
    );
};

export default HomePage;
