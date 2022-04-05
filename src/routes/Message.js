import react, { useRef, useState } from 'react';

const Message = () => {

    const [edit, setEdit] = useState(false);
    const [validate, setValidate] = useState(false);

    const nicknameRef = useRef('');
    const bodyRef = useRef('');

    const style = {
        width: '85%',
    };

    const example = 'example';

    const enableEdit = () => {
        setEdit(true)
        validateHandler();
    };

    const disableEdit = () => {
        setEdit(false)
    };

    const validateHandler = () => {
        if((nicknameRef.current.value.length > 5) && (bodyRef.current.value.length > 0)) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    };

    const confirmEdit = () => {
        setEdit(false);
        console.log('edit confirmed');
    };

    return (
        <div>
            <div className="card mx-5 mt-5" style={style}>
                <div className="card-body">
                    <input className="form-control text-start card-title" ref={nicknameRef} defaultValue={'Nickname'} readOnly={!edit} onChange={validateHandler} />
                    <input className="form-control text-start card-text" ref={bodyRef} defaultValue={example} readOnly={!edit} onChange={validateHandler} />
                    <h6 className="text-start card-subtitle my-2 text-muted">05/05/2022</h6>
                    {edit && 
                    (
                        <div className="text-start py-2">
                            <button className="btn bg-warning text-white me-2" disabled={!validate} onClick={confirmEdit}>Conferma</button>
                            <button className="btn btn-outline-primary" onClick={disableEdit}>Annulla</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="my-2">
                <button className="btn text-white bg-warning m-2" type="button" onClick={enableEdit}>Modifica</button>
                <button className="btn text-white bg-danger m-2" type="button">Elimina</button>
            </div>
        </div>
    )
};

export default Message;