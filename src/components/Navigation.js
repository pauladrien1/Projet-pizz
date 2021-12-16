import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className="hover" 
                activeClassName='nav-active'>
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">Notre Carte
                <ul className="nav-projects">
                    <NavLink to="/Pizzas" className="hover" activeClassName='nav-active'>
                        <li>Pizzas</li>
                    </NavLink>
                    <NavLink to="/Pastas" className="hover" activeClassName='nav-active'>
                        <li>Pâtes</li>
                    </NavLink>
                    <NavLink to="/Drinks" className="hover" activeClassName='nav-active'>
                        <li>Boissons</li>
                    </NavLink>
                    <NavLink to="/Desserts" className="hover" activeClassName='nav-active'>
                        <li>Desserts</li> 
                    </NavLink>
                </ul>
                </li>

                <NavLink to="/Contact" className="hover" 
                activeClassName='nav-active'>
                    <li>Contact</li>
                </NavLink>
            
            </ul>
        </div>
    );
};

export default Navigation;