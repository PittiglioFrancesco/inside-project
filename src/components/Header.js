import react from 'react';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <span className="nav-link active" aria-current="page">Home</span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">Link</span>
                    </li>
                    <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><span className="dropdown-item">Action</span></li>
                        <li><span className="dropdown-item">Another action</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span className="dropdown-item">Something else here</span></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link disabled">Disabled</span>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
};

export default Header;