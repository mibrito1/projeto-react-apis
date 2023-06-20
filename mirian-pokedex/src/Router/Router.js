
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PkeListPage from "../Pages/PokemonListPage/PkeListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PkeDetailPage from "../Pages/PokemonDetailPage/PkeDetailPage";
import Header from "../Components/Header/Header";
import { PokemonImg } from "../Components/PokemonCard/PkeCardStyle";
import { useState } from "react";

export const Router = () => {
    const [pokedex, setPokedex] = useState([])
    const addPokemonNaPokedex = (pokemon) => {
        setPokedex([...pokedex, pokemon])
    }

    // const filtrarPokedex = () => {
    //     pokedexFiltrada = pokedex.filter()
    //     setPokedex([...pokedex, pokemon])
    // }

    console.log("pokedex", pokedex);

    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route index="/" element={<PkeListPage addPokemonNaPokedex={addPokemonNaPokedex} />} />
                <Route path="/pokedex" element={<PokedexPage pokedex={pokedex} />} />
                <Route path="/detalhes" element={<PkeDetailPage />} />

            </Routes>

        </BrowserRouter>

    )
}