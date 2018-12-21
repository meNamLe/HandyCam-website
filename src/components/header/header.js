import React, { Component } from 'react';
import Particles from 'react-particles-js';

import HandyCam from '../../HandyCam.png';
import './header.css';
import { SpecialBoiHeader } from '../../styled-components/special-boi-header/special-boi-header';

const particleParams = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 50,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
};

class Header extends Component {
    onScrollTeleport = (height) => {
        console.log('hi')
        window.scroll({
          top: height, 
          left: 0, 
          behavior: 'smooth' 
        });
    }

    render() {
        return (
            <div className="Header-Component">
                <Particles 
                    params={particleParams}
                    height={800}
                    className="Particles-Header-Background"
                />

                <img className="handycam-photo" src={HandyCam} />

{/*                 <div className="header">
                    <div className="header-title">
                        <h3>HandyCam</h3>
                        <img src={BlessUpSVG} />
                    </div>
                    <p className="header-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <TeleportBtn>Our Mission</TeleportBtn>
                </div> */}
                <SpecialBoiHeader 
                    title="HandyCam"
                    desc="Take this as a sign to learn sign language?"
                    buttonText="Our Mission"
                    clickHandler={() => this.onScrollTeleport(600)}
                    />
            </div>
        )
    }
}

export default Header;