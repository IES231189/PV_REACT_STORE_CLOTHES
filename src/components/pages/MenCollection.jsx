import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../molecule/Card';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MenCollection = () => {
    const products = [
        { id: 1, name: 'V-Neck T-Shirt', price: '$99', img: '/src/assets/images/1.2.jpg' },
        { id: 2, name: 'Embroidered Seersucker Shirt', price: '$99', img: '/src/assets/images/1.3.jpg' },
        { id: 3, name: 'Cotton T Shirt', price: '$99', img: '/src/assets/images/1.4.jpg' },
        { id: 4, name: 'Basic Slim Fit T-Shirt', price: '$99', img: '/src/assets/images/1.5.jpg' },
        { id: 5, name: 'Crewneck T-Shirt', price: '$99', img: '/src/assets/images/1.6.jpg' },
        { id: 6, name: 'Henley T-Shirt', price: '$99', img: '/src/assets/images/1.7.jpg' },
        { id: 7, name: 'Full Sleeve Zipper', price: '$99', img: '/src/assets/images/1.8.jpg' },
        { id: 8, name: 'Blurred Print T-Shirt', price: '$99', img: '/src/assets/images/1.9.jpg' },
        { id: 9, name: 'Abstract Print Shirt', price: '$99', img: '/src/assets/images/1.11.jpg' },
        { id: 10, name: 'Full Sleeve Zipper', price: '$99', img: '/src/assets/images/1.12.jpg' }
    ];

    return (
        <div>
            <Header />
            <h1>New Collection Summer 2024</h1>
            <div className="container">
                {products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <Card imgSrc={product.img} altText={product.name} description={`${product.name}<br/>${product.price}`} />
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default MenCollection;
