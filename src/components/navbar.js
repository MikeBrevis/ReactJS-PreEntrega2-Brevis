import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="nav-item-box bg-primary">
                                    <span className="nav-item-label">Artículos en venta</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="nav-item-box bg-success">
                                    <span className="nav-item-label">Noticias</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="nav-item-box bg-info">
                                    <span className="nav-item-label">Redes sociales</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="nav-item-box bg-warning">
                                    <i className="fas fa-shopping-cart"></i> Carrito de compra <span className="badge badge-pill badge-light">5</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
