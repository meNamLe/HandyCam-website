import React, { Component } from 'react';
import './about.css';
import { AboutBoxes } from '../../styled-components/about-boxes/about-boxes';
import { AboutSection } from '../../styled-components/about-section/about-section';

class About extends Component {
    render() {
        return(
            <div className="About">
                <AboutBoxes
                    textOne="To help people pursue learning American Sign Language (ASL)"
                    textTwo="Leverage machine learning to recognize hand gestures as characters"
                    textThree="Deliver a entertaining platform for users to learn ASL"
                    />
                <AboutSection 
                    p1="There are 10,000,000 people with partially impaired hearing and 1,000,000 deaf people in the United State. Though writing and reading is common for communication when speech isn’t possible, people are aware that it is inefficient."
                    p2="HandyCam is a tool to teach American Sign Language in an engaging and surefire way! By feeding photos of sign language characters to a machine this app will accurately predict the characters the user signs."
                    href1="https://devpost.com/software/handycam" />
                
            </div>
        )
    }
}

export default About;

