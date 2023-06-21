
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PkeListPage from "../Pages/PokemonListPage/PkeListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PkeDetailPage from "../Pages/PokemonDetailPage/PkeDetailPage";
import Header from "../Components/Header/Header";
import { PokemonImg } from "../Components/PokemonCard/PkeCardStyle";
import { useState } from "react";

export const Router = () => {
    const [pokedex, setPokedex] = useState([])
    const addPokemonNaPokedex = (pokemonToAdd) => {

        const jaNapokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name)
        if (!jaNapokedex) {
            const newPokedex = [...pokedex, pokemonToAdd]
            setPokedex(newPokedex)
            alert("pokemon foi adivionado na Pokedex")
        } else { alert("Pokemon ja esta na Pokedex") }
    }

    const removerPokedex = (pokemonToRemove) => {
        const newPodex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
        setPokedex(newPodex)
    }
    git

    console.log("pokedex", pokedex);

    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route index="/" element={<PkeListPage addPokemonNaPokedex={addPokemonNaPokedex} removerPokedex={removerPokedex} />} />
                <Route path="/pokedex" element={<PokedexPage pokedex={pokedex} removerPokedex={removerPokedex} />} />
                <Route path="/detalhes" element={<PkeDetailPage />} />

            </Routes>

        </BrowserRouter>

    )
}