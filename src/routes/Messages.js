import react, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getAllComments } from '../api/comments';


const Messages = (props) => {

    const style = {
        width: '85%',
    };

    const provaRedirect = (id) => {
        console.log('entro');
        const link = '/articles/' + props.articleId.toString() + '/comments/' + id.toString();
        window.location.href = link;
        return <Redirect to={link} />
    };

    // api all comments
    const [messageArray, setMessageArray] = useState([]);

    useEffect(() => {
        getAllComments(props.articleId, props.pageNumber - 1, 20).then((r) => {
            setMessageArray(r.error.data.content)
        });
    }, [props.pageNumber]);

    

    const messages = messageArray.map((message) => {
            <div onClick={() => provaRedirect(message.id)}>
                <h5 key={message.id} className="text-start card-title">{message.nickname}</h5>
                <p className="text-start card-text">{message.body}</p>
                <h6 className="text-start card-subtitle mb-2 text-muted">{message.date}</h6>
            </div>
    });

    return (
        <div className="container">

        <div className="card m-5" style={style}>
            <div className="card-body">
                {messages}
            </div>
        </div>
            
            {/* <div className="card m-5" style={style}>
                <div className="card-body">
                <h5 className="text-start card-title">Nickname</h5>
                    <p className="text-start card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6 className="text-start card-subtitle mb-2 text-muted">05/05/2022</h6>
                </div>
            </div> */}

        </div>
    )
};

export default Messages;