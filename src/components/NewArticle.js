import react, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { postArticle, editArticle } from '../api/articles';

const NewArticle = (props) => {

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

    // api POST Article - needs testing

    const submitHandler = (event) => {
        event.preventDefault();
        const params = {
            idCategory: selectRef.current.value,
            body: bodyRef.current.value,
            name: titleRef.current.value,
        };
        postArticle(params).then((r) => {
        });
        props.closeForm();
        window.location.reload();
    };

    // categories
    
    const optionsList = props.options.map((option) => 
        <option key={option.id} value={option.id}>{option.name}</option>
    );

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
                        {optionsList}
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
                            <button type="button" className="btn btn-outline-primary col-1 text-center px-1" onClick={props.submit}>Annulla</button>
                        </>
                    )}
                </div>
            </form>
        </div>
    )
};

export default NewArticle;