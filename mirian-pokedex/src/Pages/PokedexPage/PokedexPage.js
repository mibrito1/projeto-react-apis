import React from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'



export default function PokedexPage(props) {

    return (
        <>
            {props.pokedex.map((pokemon) => {
                return (<PokemonCard
                    addPokemonNaPokedex={props.addPokemonNaPokedex}
                    key={pokemon.name} pokemon={pokemon} />)

            })}


        </>
    )
}
