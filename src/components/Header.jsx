import React from 'react';
import logo from '../assets/logo2.png';

const Header = () => (
    <header className="header">
        <div className="headerContainer">
            <img src={logo} alt="Logo JolyGuacamoly" className="logo" />
            <div className="headerText">
                <h1>JolyGuacamoly</h1>
                <p>Guacamole natural directo a tu mesa</p>
            </div>
        </div>
    </header>
);

export default Header;
