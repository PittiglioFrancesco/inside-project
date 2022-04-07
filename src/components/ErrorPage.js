import react from 'react';

const ErrorPage = (props) => {
    return (
        <div className="my-5 py-5">
            <h2>{props.errorNumber || 404}</h2>
            <p>{props.errorMessage || 'Page not found'}</p>
        </div>
    )
};

export default ErrorPage;