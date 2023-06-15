import React from 'react'
import { CardBox, Container, InfoBox, DivId, BotaoCapturar, BotaoDetalhe, PokemonImg, IdPokemom, NomePokemom } from './PkeCardStyle'
import pokebola from "../../Assets/pokebola.svg"
import poison from "../../Assets/poison.svg"
import grass from "../../Assets/grass.svg"
import bullbassauro from "../../Assets/bulbassauro.svg"



export default function PokemonCard() {
    return (
        <Container>
            <PokemonImg src={bullbassauro} alt="Pokemon" />
            <CardBox>
                <InfoBox>
                    <DivId>

                        <IdPokemom>ID</IdPokemom>
                        <NomePokemom>NOME</NomePokemom>
                        <img src={grass} alt="" />
                        <img src={poison} alt="" />
                    </DivId>
                    <BotaoDetalhe>
                        <p>Detalhes</p>
                    </BotaoDetalhe>


                </InfoBox>
                <img src={pokebola} alt="" />

            </CardBox>

            <BotaoCapturar>
                <img src='' alt='' />
                Capturar
            </BotaoCapturar>

        </Container>



    )
}
