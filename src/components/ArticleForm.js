import react, { useRef, useState } from 'react';

const ArticleForm = (props) => {

    // style

    const textArea = {
        width: '100%',
        height: '100px',
    };

    // submit of new article
    const [buttonStatus, setButtonStatus] = useState(false);

    const titleRef = useRef('');
    const selectRef = useRef('');
    const bodyRef = useRef('');

    const formControl = () => {
        if((titleRef.current.value.length > 10) && (selectRef.current.value !== 0) && (bodyRef.current.value.length > 10)) {
            setButtonStatus(true);
        } else {
            setButtonStatus(false);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3 row">
                    <label htmlFor="TitleInput" className="form-label text-start m-0 p-0">Titolo Articolo</label>
                    <input type="text" className="form-control" id="TitleInput" aria-describedby="titleHelp" ref={titleRef} onChange={formControl} />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="category" className="form-label text-start m-0 p-0">Categoria</label>
                    <select id="category" className="form-select w-25" ref={selectRef} onClick={formControl}>
                        <option value="1">Opzione 1</option>
                        <option value="2">Opzione 2</option>
                        <option value="3">Opzione 3</option>
                    </select>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="body" className="form-label text-start m-0 p-0">Corpo dell'articolo</label>
                    <textarea type="text" className="form-control" style={textArea} id="body" ref={bodyRef} onChange={formControl} />
                </div>
                <div className="mb-3 row">
                    {props.action === 'create' && <button disabled={!buttonStatus} type="submit" className="btn btn-primary col-1 text-center px-1">Conferma</button>}
                    {props.action === 'edit' && 
                    (
                        <>
                            <button disabled={!buttonStatus} type="submit" className="btn btn-outline-warning col-1 text-center px-1 me-2">Modifica</button>
                            <button disabled={!buttonStatus} type="submit" className="btn btn-outline-primary col-1 text-center px-1">Annulla</button>
                        </>
                    )}
                </div>
            </form>
        </div>
    )
};

export default ArticleForm;