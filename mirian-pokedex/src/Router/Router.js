
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PkeListPage from "../Pages/PokemonListPage/PkeListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PkeDetailPage from "../Pages/PokemonDetailPage/PkeDetailPage";
import Header from "../Components/Header/Header";

export const Router = () => {

    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route index="/" element={<PkeListPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/detalhes" element={<PkeDetailPage />} />


            </Routes>

        </BrowserRouter>

    )
}