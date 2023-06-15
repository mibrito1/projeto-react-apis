import React from 'react'
import styled from 'styled-components'

export const Container = styled.header`
height: 15vh;
width: 100%;
display:flex ;
justify-content: space-around;
align-items: center;
background-color: #ffffff;

`;
export const BotaoPokedex = styled.button`
width: 15vw;
max-height: 17vh;
min-height: 10vh;
background: #33a4f5;
border-radius: 1vw;
border: none;
cursor: pointer;
color: #ffffff;
font-size: 2vw;
font-family: 'Poppins', sans-serif;


`;
export const Logo = styled.img`
max-width: 20vw;
min-width: 15vw;

`;
export const BotaoHome = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
width: 20vw;
height: 5vh;
font-family: "Poppins";
font-style: normal;
font-weight: 700;
font-size: 1.5vw;
display: flex;
align-items: center;
gap: 0.3vw;

img{
    height: 2vw;
}

`;

