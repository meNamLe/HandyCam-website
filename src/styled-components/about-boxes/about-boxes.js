import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components" 
import './about-boxes.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 5px 5px 0 rgba(233,240,243,0.5), 0 0 0 1px #E6ECF8;
    color: #293347;
    display: block;
    padding: 1.25rem;
    text-align: center;

    @media only screen and (min-width: 960px) {
        margin-top: -100px;
    }

    @media only screen and (max-width: 960px) {
        margin-top: -400px;
    }

`;

const BoxesContainer = styled.div`
    position: relative;
    display: flex;
    
    @media only screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const BoxItem = styled.div`
    text-align: center;
    flex: 1;

    @media only screen and (min-width: 960px) {
        padding: 0 30px;
    }

    @media only screen and (max-width: 960px) {
        padding: 30px 0;
        border-bottom: 1px solid lightgrey;
    }
`;

const Desc = styled.p`
    font-size: 16px;   
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Icon = styled.i`
    font-size: 60px;
`;

const Goals = styled.p`
    font-size: 40px;
    line-height: 1.125;
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
` 


const AboutBoxes = ({
    textOne,
    textTwo,
    textThree
}) => (
    <Container>
    <Goals>Goals</Goals>
    <BoxesContainer>
        <BoxItem>
            <Icon className="material-icons">school</Icon>
            <Desc>{textOne}</Desc>
        </BoxItem>
        <BoxItem className="lazy-center-box">
            <Icon className="material-icons">developer_mode</Icon>
            <Desc>{textTwo}</Desc>
        </BoxItem>
        <BoxItem>
            <Icon className="material-icons">insert_emoticon</Icon>
            <Desc>{textThree}</Desc>
        </BoxItem>
    </BoxesContainer>
    </Container>
)

AboutBoxes.defaultProps = {
    textOne: null,
    textTwo: null,
    textThree: null
};

AboutBoxes.propTypes = {
    textOne: PropTypes.string.isRequired,
    textTwo: PropTypes.string.isRequired,
    textThree: PropTypes.string.isRequired  
};

export { AboutBoxes };