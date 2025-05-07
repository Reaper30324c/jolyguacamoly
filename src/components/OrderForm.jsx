import React, { useState } from 'react';
import { products } from '../data/products';

const OrderForm = ({ onNewOrder }) => {
    const [cliente, setCliente] = useState('');
    const [producto, setProducto] = useState(products[0].name);
    const [cantidad, setCantidad] = useState(1);
    const [comentario, setComentario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            id: new Date().getTime(), // ID simple usando la marca de tiempo
            cliente,
            producto,
            cantidad,
            comentario,
            estado: 'Pendiente',
        };

        onNewOrder(newOrder);
        // Reiniciamos el formulario
        setCliente('');
        setProducto(products[0].name);
        setCantidad(1);
        setComentario('');
        alert('¡Pedido enviado con éxito!');
    };

    return (
        <section className="orderForm">
            <h2>Realiza tu Pedido</h2>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label>Nombre del Cliente:</label>
                    <input
                        type="text"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label>Producto:</label>
                    <select value={producto} onChange={(e) => setProducto(e.target.value)} required>
                        {products.map((p, index) => (
                            <option key={index} value={p.name}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label>Cantidad:</label>
                    <input
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label>Comentario:</label>
                    <textarea
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        rows="3"
                    />
                </div>
                <button type="submit" className="submitButton">
                    Enviar Pedido
                </button>
            </form>
        </section>
    );
};

export default OrderForm;
