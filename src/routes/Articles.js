import react, { useRef, useState } from 'react';
import ArticleForm from '../components/ArticleForm';


const Articles = () => {

    // style
    const style = {
        width: '15%',
    };

    // show or hide form
    const [form, setForm] = useState(false);

    const setFormTrue = () => {
        setForm(true);
    };

    const setFormFalse = () => {
        setForm(false);
    }
    
    return (
        <>
            <div className="row justify-content-start">
                {!form && <button type="button" className="btn rounded-pill bg-primary text-white ms-1 mt-5 mb-2 p-1" style={style} onClick={setFormTrue}>Nuovo Articolo</button>}
                {form && 
                    (
                        <>
                            <button type="button" className="btn rounded-pill bg-danger text-white ms-1 mt-5 mb-2 p-1" style={style} onClick={setFormFalse}>
                                Annulla
                            </button>
                            <ArticleForm action='create' />
                        </>
                    )}
            </div>
            <table className="table table-hover my-5">
                <thead>
                    <tr className="py-5">
                        <th>Data</th>
                        <th>Categoria</th>
                        <th>Titolo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="py-5">
                        <td>04/04/2022</td>
                        <td>Dal mondo</td>
                        <td>Guerra in Ucraina</td>
                    </tr>
                    <tr className="py-5">
                        <td>04/04/2022</td>
                        <td>Salute</td>
                        <td>COVID-19</td>
                    </tr>
                    <tr className="py-5">
                        <td>04/04/2022</td>
                        <td>Tecnologia</td>
                        <td>Nuova scoperta sui Robot</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default Articles;