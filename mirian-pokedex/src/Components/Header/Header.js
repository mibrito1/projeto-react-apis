import React from 'react'
import { Container, Logo, BotaoHome, BotaoPokedex } from './HeaderStyle'
import logo from "../../Assets/Logo-Pokemom.svg"
import MenorQue from "../../Assets/MenorQue.svg"
import { useNavigate } from 'react-router-dom'
import { Router } from '../../Router/Router'

export default function Header() {
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/pokedex")
    }
    const goToTodosPokemons = () => {
        navigate("/")
    }



    return (

        <Container>

            <BotaoHome onClick={goToTodosPokemons} >
                <img src={MenorQue} alt='' />
                <u>Todos os Pokemons</u>
            </BotaoHome>

            <Logo src={logo} alt="logo do pokemon" />
            <BotaoPokedex onClick={goToPokedex}>Pokedex</BotaoPokedex>

        </Container>
    )
}
