import react, { useEffect, useRef, useState } from 'react';
import { getCategories } from '../api/categories';
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

    const provaRedirect = () => {
        window.location.href = '/articles/1';
    };   

    // pagination

    const pageRef = useRef('1');
    const [pageNumber, setPageNumber] = useState(1);
    
    const getPageNumber = () => {
        console.log(pageRef.current.value);
    };

    const buttonPagePlus1 = () => {
        setPageNumber(pageNumber + 1);
    };

    const buttonPagePlus5 = () => {
        setPageNumber(pageNumber + 5);
    };

    const buttonPageMinus1 = () => {
        if (pageNumber === 1) {
            setPageNumber(1);
        } else {
            setPageNumber(pageNumber - 1);
        }
    };

    const buttonPageMinus5 = () => {
        if (pageNumber < 6) {
            setPageNumber(1);
        } else {
            setPageNumber(pageNumber - 5);
        }
    };

    // api
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((r) => {
            console.log(r.response.error.data);
            setCategories(r.response.error.data);
        });
    }, []);

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
                            <ArticleForm options={categories} action='create' />
                        </>
                    )}
            </div>

            <h2 className="text-start mt-5">Tutti gli Articoli</h2>

            <div className="border">
                <table className="table table-hover mt-2 mb-5">
                    <thead>
                        <tr className="py-5">
                            <th>Data</th>
                            <th>Categoria</th>
                            <th>Titolo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-5" onClick={provaRedirect}>
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
                <div className="row justify-content-center">
                    <button type="button" className="btn border col-1" onClick={buttonPageMinus5}>{'<<'}</button>
                    <button type="button" className="btn border col-1" onClick={buttonPageMinus1}>{'<'}</button>
                    <input type="text" className="input-field text-center col-1" value={pageNumber} onChange={getPageNumber} readOnly />
                    <button type="button" className="btn border col-1" onClick={buttonPagePlus1}>{'>'}</button>
                    <button type="button" className="btn border col-1" onClick={buttonPagePlus5}>{'>>'}</button>
                </div>
            </div>
        </>
    )
};

export default Articles;