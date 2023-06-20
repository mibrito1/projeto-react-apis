import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const useRecebeDados = () => {
    const [dados, setDados] = useState([]);

    const recebeDados = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then((resposta) => {
                setDados(resposta.data.results);
            })
            .catch((erro) => {
                console.log(erro.response);
            });
    };
    useEffect(() => {
        recebeDados();
    }, []);

    return dados;
};
