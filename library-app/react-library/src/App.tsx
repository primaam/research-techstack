import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <HomePage />
            <Footer />
        </React.Fragment>
    );
}

export default App;
