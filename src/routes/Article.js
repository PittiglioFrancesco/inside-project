import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';

const Body = () => {

    const [modify, setModify] = useState(false);

    const enableChanges = () => {
        setModify(true);
    };

    const disableChanges = () => {
        setModify(false);
    };

    const deleteArticle = () => {
        console.log('deleted');
    }

    return (
        <div>
            {!modify && (
                <>
                    <h1 className="text-start mt-5 mb-1">La guerra in Ucraina</h1>

                    <p className="text-start">Pubblicato il 4 Aprile 2022</p>

                    <p className="mt-5 py-5 px-3 text-start border">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="mb-5">
                        <button className="btn btn-outline-warning m-2" type="button" onClick={enableChanges}>Edit</button>
                        <button className="btn btn-outline-danger m-2" type="button">Delete</button>
                    </div>
                </>
            )}

            {modify &&
            (
                <div className="my-5">
                    <h2 className="mb-4">Modifica Articolo</h2>
                    <ArticleForm action='edit' />
                </div>
                
            )}

            <div className="row justify-content-between me-1 border-top">
                <h2 className="text-start col-9">Comments</h2>
                <Link to='/comments'>
                    <button className="col-2 btn rounded-pill bg-primary text-white m-2" type="button">View Comments</button>
                </Link>
            </div>
        </div>
    )
};

export default Body;