import React from 'react';
import { products } from '../data/products'; // Importa los productos para consultar el precio

const AdminPanel = ({ orders, onUpdateOrderStatus }) => (
    <section className="adminPanel">
        <h2>Panel Administrativo</h2>
        {orders.length === 0 ? (
            <p>No hay pedidos.</p>
        ) : (
            <table className="ordersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Comentario</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        // Buscar el producto en la lista para obtener su precio
                        const productInfo = products.find(
                            (product) => product.name === order.producto
                        );
                        const totalCost = productInfo
                            ? productInfo.price * order.cantidad
                            : 0;
                        return (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.cliente}</td>
                                <td>{order.producto}</td>
                                <td>{order.cantidad}</td>
                                <td>${totalCost.toFixed(0)}</td>
                                <td>{order.comentario}</td>
                                <td>{order.estado}</td>
                                <td>
                                    <button onClick={() => onUpdateOrderStatus(order.id, 'EnProceso')}>
                                        En Proceso
                                    </button>
                                    <button onClick={() => onUpdateOrderStatus(order.id, 'Completado')}>
                                        Completado
                                    </button>
                                    <button onClick={() => onUpdateOrderStatus(order.id, 'Cancelado')}>
                                        Cancelado
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )}
    </section>
);

export default AdminPanel;