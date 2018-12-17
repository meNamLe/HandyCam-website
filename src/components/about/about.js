import React, { Component } from 'react';
import './about.css';
import { AboutBoxes } from '../../styled-components/about-boxes/about-boxes';

class About extends Component {
    render() {
        return(
            <div className="About">
                <AboutBoxes
                    textOne="To help people pursue learning American Sign Language (ASL)"
                    textTwo="Leverage machine learning to recognize hand gestures as characters"
                    textThree="Deliver a entertaining platform for users to learn ASL"
                    />
            </div>
        )
    }
}

export default About;

