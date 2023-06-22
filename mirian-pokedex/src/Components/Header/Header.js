import React from 'react'
import { Container, Logo, BotaoHome, BotaoPokedex } from './HeaderStyle'
import logo from "../../Assets/Logo-Pokemom.svg"
import MenorQue from "../../Assets/MenorQue.svg"
import { useNavigate } from 'react-router-dom'
import { Router } from '../../Router/Router'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/pokedex")
    }
    const goToTodosPokemons = () => {
        navigate("/")
    }

    return (
        <Container>
            <Logo src={logo} alt="logo do pokemon" />

            {location.pathname === '/' ? (<BotaoPokedex onClick={goToPokedex}>Pokedex</BotaoPokedex>) : (<BotaoHome onClick={goToTodosPokemons} >
                <img src={MenorQue} alt='' />
                <u>Todos os Pokemons</u>
            </BotaoHome>)}
        </Container>
    )
}
