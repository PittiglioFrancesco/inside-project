import react from 'react';


const Body = () => {
    const ciao = 'ciao';
    return (
        <table className="table table-hover my-5">
            <thead>
                <tr className="py-5">
                    <th>Date</th>
                    <th>Category</th>
                    <th>Title</th>
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
    )
};

export default Body;