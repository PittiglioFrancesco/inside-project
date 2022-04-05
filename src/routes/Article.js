import react, { useState } from 'react';
import MessageForm from '../components/MessageForm'
import ArticleForm from '../components/ArticleForm';
import Messages from './Messages';

const Body = () => {

    const [modify, setModify] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);

    const setMessageFormTrueHandler = () => {
        setShowMessageForm(true);
    };
    
    const setMessageFormFalseHandler = () => {
        setShowMessageForm(false);
    };

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
                        <button className="btn bg-warning text-white m-2" type="button" onClick={enableChanges}>Edit</button>
                        <button className="btn bg-danger text-white m-2" type="button">Delete</button>
                    </div>
                </>
            )}

            {modify &&
            (
                <div className="my-5">
                    <h2 className="mb-4">Modifica Articolo</h2>
                    <ArticleForm submit={disableChanges} action='edit' />
                </div>           
            )}

            <div className="row justify-content-between mt-5 me-1 border-top">
                <h2 className="text-start col-9">Commenti</h2>
                <h2 className="col-3 text-end">2</h2>
            </div>

            <div className="row justify-content-between me-1 my-3">
                <h4 className="text-start col-11">Aggiungi Commento</h4>
                {!showMessageForm &&
                    (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill col-1" viewBox="0 0 16 16" onClick={setMessageFormTrueHandler}>
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                    )}

                {showMessageForm && 
                    (
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill col-1" viewBox="0 0 16 16" onClick={setMessageFormFalseHandler}>
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                    <MessageForm />
                    </>
                    )}
            </div>

            <div className="row justify-content-between me-1">
                <Messages />
            </div>
        </div>
    )
};

export default Body;