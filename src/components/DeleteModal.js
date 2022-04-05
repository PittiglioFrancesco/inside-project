import react from 'react';

const DeleteModal = (props) => {
    return (
        <div>
            <div className="modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.deleteTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{props.deleteMessage}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={props.onClose}>Annulla</button>
                            <button type="button" className="btn btn-danger" onClick={props.onClick}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeleteModal;