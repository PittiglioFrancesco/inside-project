import react from 'react';

const Header = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom m-0 p-0">
            <div className="container-fluid">
                <span href="/" className="navbar-brand">realPage</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/articles" className="nav-link active" aria-current="page">Articoli</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;