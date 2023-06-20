import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';

const Catalog = () => {
    const catalogItems = [
        {id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: '100', image: image1},
        {id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: '200', image: image2},
        {id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: '300', image: image3},
        {id: 4, name: 'Producto 4', description: 'Descripción del Producto 4', price: '400', image: image4},
        {id: 5, name: 'Producto 5', description: 'Descripción del Producto 5', price: '500', image: image5},
        {id: 6, name: 'Producto 6', description: 'Descripción del Producto 6', price: '600', image: image6},
    ]

    return (
        <div className="container">
            <h1>Catálogo de Productos</h1>
            <div className="catalog-grid">
                {catalogItems.map(item => (
                    <Link to={`/item/${item.id}`} key={item.id} className="catalog-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
