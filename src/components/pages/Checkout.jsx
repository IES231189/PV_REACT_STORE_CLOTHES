import React, { useState } from 'react';
 import './Chekout.css'

const Checkout = () => {
    const [form, setForm] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        cardName: '',
        cardExpiry: '',
        cardCVC: ''
    });

    const [cartItems] = useState([
        {
            id: 1,
            name: 'Producto de ejemplo',
            price: '$99',
            img: '/src/assets/images/1.2.jpg',
            color: 'Red',
            size: 'M'
        }
    ]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío del formulario, validación, etc.
        alert('Compra realizada con éxito');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt={item.name} />
                        <div className="item-details">
                            <p>{item.name}</p>
                            <p>Precio: {item.price}</p>
                            <p>Color: {item.color}</p>
                            <p>Tamaño: {item.size}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="checkout-form">
                <h2>Información de Envío</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre Completo"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Dirección"
                    value={form.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={form.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="Código Postal"
                    value={form.zip}
                    onChange={handleChange}
                    required
                />

                <h2>Información de Pago</h2>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de Tarjeta"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cardName"
                    placeholder="Nombre en la Tarjeta"
                    value={form.cardName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cardExpiry"
                    placeholder="Fecha de Expiración (MM/AA)"
                    value={form.cardExpiry}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cardCVC"
                    placeholder="CVC"
                    value={form.cardCVC}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="submit-button">Realizar Compra</button>
            </form>
        </div>
    );
};

export default Checkout;
