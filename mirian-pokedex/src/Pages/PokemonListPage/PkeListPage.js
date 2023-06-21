import React from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { TituloDaPagina, CardConteiner } from './PkeListStyle'
import { useRecebeDados } from '../../Components/Hooks/useRecebeDados';

export default function PkeListPage(props) {
    const pokemons = useRecebeDados();
    console.log(pokemons);
    return (
        <>
            <TituloDaPagina>Todos Pokémons</TituloDaPagina>
            <CardConteiner>
                {pokemons.map((pokemon) => {
                    return (<PokemonCard removerPokedex={props.removerPokedex} addPokemonNaPokedex={props.addPokemonNaPokedex} key={pokemon.name} pokemon={pokemon} />);


                })}


            </CardConteiner>

            <p></p>
        </>
    )
}
