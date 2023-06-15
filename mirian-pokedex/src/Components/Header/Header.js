import React from 'react'
import { Container, Logo, BotaoHome, BotaoPokedex } from './HeaderStyle'
import logo from "../../Assets/Logo-Pokemom.svg"
import MenorQue from "../../Assets/MenorQue.svg"


export default function Header() {
    return (

        <Container>
            <BotaoHome>
                <img src={MenorQue} alt='' />
                <u>Todos os Pokemons</u>
            </BotaoHome>

            <Logo src={logo} alt="logo do pokemon" />
            <BotaoPokedex>Pokedex</BotaoPokedex>

        </Container>


    )
}
