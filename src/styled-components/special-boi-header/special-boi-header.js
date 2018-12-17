import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components" 

import BlessUpSVG from '../../bless_up.svg';
import { TeleportBtn } from '../teleport-btn/teleport-btn';

/*  
    Header with Title, desc, and animatedButton 
    Responsive to center itself when viewed on mobile
    Position left on wide-device view
*/

const moveRight = keyframes`
    100% {
        opacity: 1;
        transform: translate(40%);
    }
`
const moveDownMobile = keyframes`
    100% {
        opacity: 1;
        top: 20px;
    }
`

const GridContainer = styled.div`
    position: absolute;
    display: grid;
    opacity: .5;
    transition: .25s;

    @media only screen and (min-width: 960px) {
        top: 120px;
        right: 70vw;
        animation: ${moveRight} 1s forwards;
    }

    @media only screen and (max-width: 960px) {
        width: 100vw;
        top: -20px;
        text-align: center;
        animation: ${moveDownMobile} 1s forwards;
    }
`;


/* Has material design icon */
const HeaderTitle = styled.div`
    color: whitesmoke;
    top: 0;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 960px) {
        font-size: 40px;
        width: 350px;
    }

    @media only screen and (max-width: 960px) {
        width: 280px;        
        font-size: 32px;
        margin-right: auto;
        margin-left: auto;
    }

`;

const Desc = styled.p`
    color: whitesmoke;
    font-size: 25px;
    padding: 0;
`;

const SpecialBoiHeader = ({
    title,
    desc, 
    buttonText
}) => (
    <GridContainer>
        <HeaderTitle>
            <h3>{title}</h3>
            <img src={BlessUpSVG} />
        </HeaderTitle>
        <Desc>{desc}</Desc>
        <TeleportBtn>{buttonText}</TeleportBtn>
    </GridContainer>
)

SpecialBoiHeader.defaultProps = {
    title: null,
    desc: null,
    buttonText: null
};

SpecialBoiHeader.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired  
};

export { SpecialBoiHeader };