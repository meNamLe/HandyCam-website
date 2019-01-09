import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HandyCam from '../../HandyCam.png';
import { TransparentA } from '../transparent-a/transparent-a';

const FlexContainer = styled.div`
    display: flex;
    margin-top: 250px;
    margin-bottom: 200px;
    padding: 0 100px;

    @media screen and (max-width: 768px) {
        padding: 0 5px;
    }
`; 

const TextBox = styled.div`
    width: 400px;
    margin-top: 100px;
    margin-bottom: 20px;
    margin-right: 0;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: #383838;

    @media screen and (max-width: 768px) {
        width: 90vw;
    }
`;

const FlexBox = styled.div`
    flex: 1;
    text-align: center;

    @media screen and (max-width: 768px) {
        flex: 0;
    }
`;


const Image = styled.img`
    @media screen and (max-width: 768px) {
        display: none
    }

    width: 50vw;
`;


const ColumnFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto !important;
`;

const ButtonWrapper = styled.div`
    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
`;

const AboutSection = ({
    p1,
    p2,
    href1,
}) => (
    <FlexContainer>
        <FlexBox>
            <Image src={HandyCam}/> 
        </FlexBox>
        <ColumnFlexContainer>
            <TextBox>
                <p>
                    {p1}
                    <br /><br />
                    {p2}
                </p>
            </TextBox>
            <ButtonWrapper>
                <TransparentA href={href1} target="_blank" >Check It Out!</TransparentA>
            </ButtonWrapper>
        </ColumnFlexContainer>
    </FlexContainer>
)

AboutSection.defaultProps = {
    p1: null,
    p2: null,
    href1: null,
};

AboutSection.propTypes = {
    p1: PropTypes.string.isRequired,
    p2: PropTypes.string.isRequired,
    href1: PropTypes.string.isRequired,
};


export { AboutSection }