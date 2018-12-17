import React from 'react';
import styled from 'styled-components';
import Mix from 'color';

const TeleportBtn = styled.button`
color: #fff;
cursor: pointer;
font-size: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding: 10px 60px;
line-height: 45px;
@media only screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
}
text-decoration: none;
text-transform: uppercase;
width: 80%;
background: transparent;
border: 2px solid
  ${Mix('#45A29E')  
      .darken(0.04)
      .string()};
border-radius: 2131231px;
letter-spacing: 1px;
transition: all 150ms linear;
&:hover {
  background: ${Mix('#45A29E')
                    .darken(0.15)
                    .string()};
  text-decoration: none;
  transition: all 250ms linear;
}`;

export { TeleportBtn };