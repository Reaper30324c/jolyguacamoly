import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import './App.css';

const PublicPage = ({ onNewOrder }) => (
  <div className="publicPage">
    <Header />
    <ProductList />
    <OrderForm onNewOrder={onNewOrder} />
    <div className="navContainer">
      <Link to="/admin">Ir a Panel Admin</Link>
    </div>
  </div>
);

const AdminPage = ({ orders, onUpdateOrderStatus, isAuthenticated, onAuthSuccess, onLogout }) => (
  <div className="adminPage">
    <Header />
    <div className="adminNav">
      <Link to="/">Volver a Página Pública</Link>
      <button onClick={onLogout} className="logoutButton">
        Logout
      </button>
    </div>
    {isAuthenticated ? (
      <AdminPanel orders={orders} onUpdateOrderStatus={onUpdateOrderStatus} />
    ) : (
      <AdminLogin onAuthSuccess={onAuthSuccess} />
    )}
  </div>
);

function App() {
  const [orders, setOrders] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addNewOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, estado: newStatus } : order
      )
    );
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicPage onNewOrder={addNewOrder} />} />
        <Route
          path="/admin"
          element={
            <AdminPage
              orders={orders}
              onUpdateOrderStatus={updateOrderStatus}
              isAuthenticated={isAuthenticated}
              onAuthSuccess={() => setIsAuthenticated(true)}
              onLogout={handleLogout}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
