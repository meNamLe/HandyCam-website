import React from 'react';
import styled from 'styled-components';
import Mix from 'color';

const TransparentA = styled.a`
color: ${Mix('#45A29E')  
  .darken(0.04)
  .string()};
cursor: pointer;
font-size: 18px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding: 10px 40px;
text-align: center
line-height: 30px;
margin: 0 10px;
text-decoration: none;
text-transform: uppercase;
width: 50%;
background: transparent;
border: 2px solid
  ${Mix('#45A29E')  
      .darken(0.04)
      .string()};
border-radius: 2131231px;
letter-spacing: 1px;
transition: all 150ms linear;
&:hover {
  color: #fff;
  background: ${Mix('#45A29E')
                    .darken(0.15)
                    .string()};
  text-decoration: none;
  transition: all 250ms linear;
}`;

export { TransparentA };