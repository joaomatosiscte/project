import React from "react";
import { NavLink } from "react-router-dom";

import './styles.css';

export function Header() {
    return (
        <header>
            {/* usar tag <NavLink> para hyperlinks em vez da tag <a> */}
            <NavLink to='/' >
               Home
            </NavLink>
            <NavLink to='/apartment/1' >
                Apartments
            </NavLink>

        </header>
    )
}