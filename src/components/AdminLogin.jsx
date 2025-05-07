import React, { useState } from 'react';

const AdminLogin = ({ onAuthSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar credenciales (usuario y contraseña deben ser "admin123")
        if (username === 'admin123' && password === 'admin123') {
            onAuthSuccess();
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <section className="adminLogin">
            <h2>Login de Administrador</h2>
            {error && <p className="errorText">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label>Nombre de usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submitButton">
                    Ingresar
                </button>
            </form>
        </section>
    );
};

export default AdminLogin;
