import grass from "../../Assets/imagens/iconeGrass.svg"
import bug from "../../Assets/imagens/iconeBug.svg"
import dark from "../../Assets/imagens/iconeDarck.svg"
import dragon from "../../Assets/imagens/iconeDragon.svg"
import eletric from "../../Assets/imagens/iconeEletric.svg"
import fairy from "../../Assets/imagens/iconeFairy.svg"
import fighting from "../../Assets/imagens/iconeFighting.svg"
import fire from "../../Assets/imagens/iconeFire.svg"
import ghost from "../../Assets/imagens/iconeGhost.svg"
import ground from "../../Assets/imagens/iconeGround.svg"
import ice from "../../Assets/imagens/iconeIce.svg"
import normal from "../../Assets/imagens/iconeNormal.svg"
import poison from "../../Assets/imagens/iconePoison.svg"
import psychic from "../../Assets/imagens/iconePsychic.svg"
import rock from "../../Assets/imagens/iconeRock.svg"
import steel from "../../Assets/imagens/iconeSteel.svg"
import water from "../../Assets/imagens/iconeWater.svg"
import flying from "../../Assets/imagens/iconeFlying.svg"
import { Tag } from "./SwitchTagStyle"



export const SwitchTag = (props) => {
    switch (props.type) {
        case "grass":
            return <Tag className="grass" >
                <img src={grass} />
                Grass</Tag>

        case "poison":
            return <Tag className="poison" >
                <img src={poison} />
                Poison</Tag>

        case "normal":
            return <Tag className="normal" >
                <img src={normal} />
                Normal</Tag>

        case "bug":
            return <Tag className="bug" >
                <img src={bug} />
                bug</Tag>

        case "dark":
            return <Tag className="dark" >
                <img src={dark} />
                dark</Tag>

        case "dragon":
            return <Tag className="dragon" >
                <img src={dragon} />
                dragon</Tag>

        case "eletric":
            return <Tag className="eletric" >
                <img src={eletric} />
                eletric</Tag>

        case "fairy":
            return <Tag className="fairy" >
                <img src={fairy} />
                fairy</Tag>

        case "fighting":
            return <Tag className="fighting" >
                <img src={fighting} />
                fighting</Tag>

        case "fire":
            return <Tag className="fire" >
                <img src={fire} />
                fire</Tag>

        case "ghost":
            return <Tag className="ghost" >
                <img src={ghost} />
                ghost</Tag>

        case "ground":
            return <Tag className="ground" >
                <img src={ground} />
                ground</Tag>

        case "ice":
            return <Tag className="ice" >
                <img src={ice} />
                ice</Tag>

        case "psychic":
            return <Tag className="psychic" >
                <img src={psychic} />
                psychic</Tag>

        case "rock":
            return <Tag className="rock" >
                <img src={rock} />
                rock</Tag>

        case "steel":
            return <Tag className="steel" >
                <img src={steel} />
                steel</Tag>

        case "water":
            return <Tag className="water" >
                <img src={water} />
                water</Tag>

        case "flying":
            return <Tag className="flying" >
                <img src={flying} />
                flying</Tag>


    }
    return "test"

}
