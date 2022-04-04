import react from 'react';

const Body = () => {
    return (
        <div>
            <h1 className="text-start mt-5 mb-1">La guerra in Ucraina</h1>

            <p className="text-start">Pubblicato il 4 Aprile 2022</p>

            <p className="my-5 py-5 px-3 text-start border">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="row justify-content-between me-1 border-top">
                <h2 className="text-start col-9">Comments</h2>
                <button className="col-2 btn rounded-pill bg-primary text-white m-2" type="button">View Comments</button>
            </div>
        </div>
    )
};

export default Body;