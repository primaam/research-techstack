import React from "react";

const ExploreTopBooks = () => {
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Find your next adventure</h1>
                    <p className="col-md-8 fs-4">Where would you like to go next?</p>
                    <a className="btn main-color btn-lg text-white" type="button" href="#">
                        Explore Top Books
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExploreTopBooks;
