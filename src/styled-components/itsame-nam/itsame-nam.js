import React from 'react';
import styled from 'styled-components';
import { TransparentA } from '../transparent-a/transparent-a';
import { HoverButton } from '../hover-button/hover-button';


const Container = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 250px;
    }

    height: 100px;
    width: 80vw;
    border-radius: 12px;
    background-color: #5CDB86;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,å0,0.22);
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-align: center;
`;

const HeaderText = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.25rem;
    color: #05386B;
    font-weight: 800;
    line-height: 1.125;    
    margin: auto;
    flex: 1;    
`;

const ButtonWrapper = styled.div`
    flex: 1;
    margin-top: auto;
    margin-bottom: auto;
`;

const Text = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #05386B;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    margin: auto;
    flex: 1;
`



const AuthorIntroduction = () => (
    <Container>
        <HeaderText>Who is the Developer?</HeaderText>
        <Text>My name is Nam Le. I'm here to <br />  chew bubble gum and code, <br />  and I'm all out of bubble gum.</Text>
        <ButtonWrapper>
        <HoverButton href="https://menamle.github.io/website-portfolio/" target="_blank">My Website</HoverButton>
        </ButtonWrapper>
    </Container>
)

export { AuthorIntroduction };