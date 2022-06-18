import { useEffect, useState } from "react";
import './Pokemons.css'

export function Pokemons ({url}) {
   const [pokemons, setPokemons] = useState()
     const getPokemons = async () => {
         try {
            const response = await fetch (url)
            const data = await response.json()
            console.log(data); 
            setPokemons(data.response)
            return data
         } catch (error) {
            return {error: error.message}
         }
     }
     
     useEffect (()=>{
    getPokemons(url).then((data) => setPokemons(data))
     }, [url]) 
 
     return (pokemons && (
        <div className={'tipo-' + pokemons.types[0].type.name}>
            <img src={pokemons.sprites.front_default} alt="Imagem do pokemon" />
            <div className="conjunto1">
            <p className="names">{pokemons.name}</p>
            {pokemons.types.map((pokemons,index) => 
            <p className={pokemons.type.name} key={index}> {pokemons.type.name}</p> 
            )}
            </div>
        </div>

     ))
}