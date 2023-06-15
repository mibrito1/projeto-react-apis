import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`
/* border: 1px solid black; */
width: 30vw;
height: 29vh;
display: flex;
align-items: end;
position: relative;
`;

export const CardBox = styled.div`
width: 30vw;
height: 23vh;
background-color: #729f92;
border-radius: 0.6vw;
display: flex;
justify-content: space-between;
`;

export const InfoBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 1.1vw;
color: #ffffff;
overflow: hidden;
`;
export const IdPokemom = styled.p`
font-size: 0.8vw;

`
export const NomePokemom = styled.p`
font-size: 1.6vw;

`
export const TypePokemom = styled.img`
width: 4.5vw;

`
export const DivId = styled.div`
display: flex;
flex-direction: column;
gap: 0.6vh;

`;
export const BotaoDetalhe = styled.button`
background-color: transparent;
border: none;
color: #ffffff;
font-size: 0.8vw;
cursor: pointer;

`

export const PokemonImg = styled.img`
position: absolute;
top:-2vh;
right: 0.4vw;
width: 11.5vw;

`
export const BotaoCapturar = styled.button`
position: absolute;
bottom: 2vh;
right: 2vw;

width: 7.6vw;
height: 4.2vh;
background: #ffffff;
border-radius: 0.4vw;
border: none;
`