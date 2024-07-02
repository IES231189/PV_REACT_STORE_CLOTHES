import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../main.css';  // Importa el archivo CSS

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    // Datos simulados del producto
    const product = {
        id: productId,
        name: 'Producto de ejemplo',
        price: '$99',
        img: '/src/assets/images/1.2.jpg',
        colors: ['Red', 'Blue', 'Green', 'Black'],
        sizes: ['S', 'M', 'L', 'XL']
    };

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    return (
        <div className="product-detail-container">
            <div className="image-container">
                <img src={product.img} alt={product.name} className="product-image" />
            </div>
            <div className="info-container">
                <h1>{product.name}</h1>
                <p>Precio: {product.price}</p>
                
                <div>
                    <h2 className="selection-header">Selecciona un color:</h2>
                    <div className="button-container">
                        {product.colors.map(color => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`color-button selection-button ${selectedColor === color ? 'selected' : ''}`}
                                style={{
                                    backgroundColor: color.toLowerCase(),
                                }}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="selection-header">Selecciona un tamaño:</h2>
                    <div className="button-container">
                        {product.sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`size-button selection-button ${selectedSize === size ? 'selected' : ''}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="selection-text">Color seleccionado: {selectedColor}</p>
                <p className="selection-text">Tamaño seleccionado: {selectedSize}</p>

                <button className="checkout-button" onClick={() => navigate('/checkout')}>Ir a Checkout</button>
            </div>
        </div>
    );
};

export default ProductDetail;
