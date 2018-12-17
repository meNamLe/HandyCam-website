import React, { Component } from 'react';
import './navbar.css';
import * as $ from 'jquery';

class Navbar extends Component {

    componentDidMount() {
        $(window).scroll(() => {
            if($(window).scrollTop() > 300) {
                $(".navbar").addClass("navbar-background");
            } else {
                $(".navbar").removeClass("navbar-background");
            }
        })
    }

    onMenuToggle = () => {
        $(".active-toggle").toggle(0);
    }

    render() {
        return (
            <nav className="navbar">
                    <span onClick={this.onMenuToggle} className="navbar-toggle" id="js-navbar-toggle">
                        <i className="material-icons">menu</i>
                    </span>
                    <ul className="main-nav active-toggle" id="js-menu">
                        <li>
                            <a href="#" className="nav-links">Home</a>
                        </li>
                        <li>
                            <a href="#" className="nav-links">Goals</a>
                        </li>
                        <li>
                            <a href="#" className="nav-links">About</a>
                        </li>
                        <li>
                            <a href="#" className="nav-links">Recent Work</a>
                        </li>
                        <li>
                            <a href="#" className="nav-links">Contact</a>
                        </li>
                    </ul>
            </nav>
        )
    }
}

export default Navbar