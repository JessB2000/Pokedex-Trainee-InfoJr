import { useState } from "react";
import { Pokemons } from "./Pokemons";
import './Searchbar.css'
import image2 from './image2.svg'

export default function Searchbar({setPokemon}) {
    const [search, setSearch] = useState(" ")
    const onChangePokemon = (e) => {
        setSearch (e.target.value)
    }
    const onClickPokemon = async(e) => {
       setPokemon({
           data: [{url:`https://pokeapi.co/api/v2/pokemon/${search}`}],
           loading: false
       })
    }
    return (
<div className="pesquisa-container">
     <input className="pesquisa" type="text" placeholder="Pesquisar pokémon" onChange={onChangePokemon}/>
     <img src={image2} alt="Lupa de pesquisa" className="button1"  onClick={onClickPokemon}/>
</div>
    )
}
