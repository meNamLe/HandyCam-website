import React, { Component } from 'react';
import './navbar.css';
import * as $ from 'jquery';

class Navbar extends Component {

    componentDidMount() {
        $(window).scroll(() => {
            if($(window).scrollTop() > 25) {
                $(".navbar").addClass("navbar-background");
            } else {
                $(".navbar").removeClass("navbar-background");
            }
        })
    }

    onScrollTeleport(height) {
        console.log('here');
        window.scroll({
          top: height, 
          left: 0, 
          behavior: 'smooth' 
        });
    }

    onMenuToggle = () => {
        $(".active-toggle").toggle();
    }

    render() {
        return (
            <nav className="navbar">
                    <span onClick={this.onMenuToggle} className="navbar-toggle" id="js-navbar-toggle">
                        <i className="material-icons">menu</i>
                    </span>
                    <ul className="main-nav active-toggle" id="js-menu">
                        <li onClick={() => this.onScrollTeleport(0)}>
                            <a href="#" className="nav-links">Home</a>
                        </li>
                        <li onClick={() => this.onScrollTeleport(600)}>
                            <a href="#" className="nav-links">Goals</a>
                        </li>
                        <li onClick={() => this.onScrollTeleport(1150)}>
                            <a href="#" className="nav-links">About</a>
                        </li>
                        <li onClick={() => this.onScrollTeleport(1900)}>
                            <a href="#" className="nav-links">Recent Work</a>
                        </li>
                    </ul>
            </nav>
        )
    }
}

export default Navbar