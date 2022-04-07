import react, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postComment } from '../api/comments';

const ArticleForm = (props) => {

    // style

    const textArea = {
        width: '100%',
        height: '100px',
    };

    // submit of new article
    const [buttonStatus, setButtonStatus] = useState(false);

    const nicknameRef = useRef('');
    const bodyRef = useRef('');

    const formControl = () => {
        if((nicknameRef.current.value.length > 5) && (bodyRef.current.value.length > 10)) {
            setButtonStatus(true);
        } else {
            setButtonStatus(false);
        }
    }

    const { articleId } = useParams();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit');
        const params = {
            body: bodyRef.current.value,
            nickname: nicknameRef.current.value,
        }
        postComment(articleId, params).then((r) => {
            console.log(r);
            props.setMessageFormFalseHandler();
        });
        
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3 row">
                    <label htmlFor="TitleInput" className="form-label text-start m-0 p-0">Nickname</label>
                    <input type="text" className="form-control" id="TitleInput" aria-describedby="titleHelp" ref={nicknameRef} onChange={formControl} />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="body" className="form-label text-start m-0 p-0">Messaggio</label>
                    <textarea type="text" className="form-control" style={textArea} id="body" ref={bodyRef} onChange={formControl} />
                </div>
                <div className="mb-3 row">
                    <button disabled={!buttonStatus} type="button" className="btn bg-primary text-white col-1 text-center px-1 me-2" onClick={submitHandler}>Invia</button>
                    <button disabled={!buttonStatus} type="button" className="btn btn-outline-primary col-1 text-center px-1">Annulla</button>
                </div>
            </form>
        </div>
    )
};

export default ArticleForm;