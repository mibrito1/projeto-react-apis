import React, { useEffect, useState } from 'react'
import { CardBox, Container, InfoBox, DivId, BotaoCapturar, BotaoDetalhe, BotaoRemover, PokemonImg, IdPokemom, NomePokemom } from './PkeCardStyle'
import pokebola from "../../Assets/pokebola.svg"
import poison from "../../Assets/poison.svg"
import grass from "../../Assets/grass.svg"
import bullbassauro from "../../Assets/bulbassauro.svg"
import { useNavigate } from 'react-router-dom'
import { SwitchTag } from '../SwitchTag/SwitchTag'
import { useLocation } from "react-router-dom";



export default function PokemonCard(props) {

    const location = useLocation()

    const [pokemonData, setPokemonData] = useState({})
    const navigate = useNavigate()
    const goToDetalhePage = () => {
        navigate("/detalhes")
    }

    // console.log(props)
    const getPokemon = async (link) => {
        const result = await fetch(link)
        const data = await result.json()
        setPokemonData(data)

    }




    console.log("pokemondata", pokemonData)
    useEffect(() => {
        getPokemon(props.pokemon.url)
    }, [])

    return (
        <Container>
            <PokemonImg src={pokemonData?.sprites?.other["official-artwork"].front_default
            } alt="Pokemon" />
            <CardBox>
                <InfoBox>
                    <DivId>

                        <IdPokemom>#{pokemonData.id} </IdPokemom>
                        <NomePokemom>{props.pokemon.name}</NomePokemom>
                        {pokemonData?.types?.map(item => (

                            <SwitchTag type={item.type.name} />
                        ))}

                    </DivId>
                    <BotaoDetalhe onClick={goToDetalhePage}>
                        <p>Detalhes</p>
                    </BotaoDetalhe>


                </InfoBox>
                <img src={pokebola} alt="" />

            </CardBox>

            {location.pathname === '/' ? (
                <BotaoCapturar onClick={() =>
                    props.addPokemonNaPokedex(props.pokemon)}>Capturar</BotaoCapturar>
            ) : (
                <BotaoRemover onClick={() =>
                    props.removerPokedex(props.pokemon)}>Remover</BotaoRemover>)}


        </Container>



    )
}

{/* <Tag> </Tag> é o mesmo que < Tag /> */ }