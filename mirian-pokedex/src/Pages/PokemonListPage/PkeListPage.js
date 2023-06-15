import React from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { TituloDaPagina, CardConteiner } from './PkeListStyle'




export default function PkeListPage() {
    return (
        <>
            <TituloDaPagina>Todos Pokémons</TituloDaPagina>
            <CardConteiner>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />

            </CardConteiner>


            <p></p>
        </>
    )
}
