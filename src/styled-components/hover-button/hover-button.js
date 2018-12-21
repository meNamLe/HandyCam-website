import React from 'react';
import styled from 'styled-components';
import Mix from 'color';

const HoverButton = styled.a`
color: #FEFFFF;
cursor: pointer;
font-size: 18px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding: 10px 40px;
line-height: 90px;
text-decoration: none;
text-transform: uppercase;
width: 50%;
background: transparent;
border: 2px solid #05386B;
border-radius: 2131231px;
letter-spacing: 1px;
transition: all 150ms linear;
&:hover {
  color: #FEFFFF;
  background: #05386B;
  text-decoration: none;
  transition: all 250ms linear;
}`;


export { HoverButton };