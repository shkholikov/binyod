import React, {Component} from "react";
import * as logo from './../assets/binyod.png';
import {NavLink} from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            aria-expanded="false"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            {" "}
                            <span className="sr-only">Toggle navigation</span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                        </button>
                        <NavLink to="/">
                            <img className="navbar-brand page-scroll" src={logo} href="#"/>
                        </NavLink>
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/" className="page-scroll">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/company" className="page-scroll">
                                    Company
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/whybinyod" className="page-scroll">
                                    Why Binyod?
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className="page-scroll">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="page-scroll">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/resource" className="page-scroll">
                                    Resource
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
