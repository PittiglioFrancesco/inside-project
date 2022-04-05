import react from 'react';

const Messages = () => {
    const style = {
        width: '85%',
    };

    return (
        <div className="container">
            <div className="row justify-content-between mt-5 me-1 border-top">
                <h2 className="text-start col-9">Comments</h2>
                <h2 className="col-3 text-end">2</h2>
            </div>

            <div className="card m-5" style={style}>
                <div className="card-body">
                <h5 class="text-start card-title">Nickname</h5>
                    <p className="text-start card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className="text-start card-subtitle mb-2 text-muted">05/05/2022</h6>
                </div>
            </div>

            <div className="card m-5" style={style}>
                <div className="card-body">
                <h5 class="text-start card-title">Nickname</h5>
                    <p className="text-start card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className="text-start card-subtitle mb-2 text-muted">05/05/2022</h6>
                </div>
            </div>

        </div>
    )
};

export default Messages;