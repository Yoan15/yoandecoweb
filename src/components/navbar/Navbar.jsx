import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() { 
        return(
            <header className="navbar navbar-expand-lg navbar-dark" >
                <a className="navbar-brand" href="/">Yoan Deconinck</a>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item ml-2">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item ml-2">
                            <NavLink to='/social' className="nav-link">Social</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}