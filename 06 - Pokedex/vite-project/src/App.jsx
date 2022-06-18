import { useEffect, useState} from 'react'
import './App.css'
import { Pokemons } from './components/Pokemons'
import Searchbar from './components/searchbar'
import image1 from "./image1.svg"


const getPokemon = async () => {

 try {
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    console.log(data); 
    return data
  }
catch (error) {
   return {error: error.message}
    }
  }
function App() {
  const [pokemon, setPokemon] = useState({

    loading: true, 
    data: null,
    error: null

  })

  const [canceled, setCanceled] = useState(
   false
  )
  useEffect (() =>{
    
    if (canceled) return

  getPokemon().then(response => setPokemon(currentPokemon => ({
     data: response.results, 
     loading: false,

  }))).catch (errors =>{
     
      setPokemon (
        {
          data:null, 
          error: error.message, 
          loading: false, 
        }
      )

    })

    return () => {
      setCanceled(true)
    }
  }, [])

  console.log(pokemon)

  if (pokemon.loading){
    return <div>Loading...</div>
  }
  return (
  <div className='tudo'>
    <li><a href="http://localhost:3000/"><img src={image1} alt="logo pokedex" className="logoPoke"/></a></li> 
    <Searchbar setPokemon={setPokemon}/>
    <p className="simbolo">Pokédex</p>
    <ul className='todos'>
      {pokemon.data.map((pokemon,index) => (
        <Pokemons key= {index} url={pokemon.url}/>
      )
      )}
    </ul>
    <p className='text-final'>Com 💛 Info Jr UFBA 2022 </p>
  </div>
  )
}

export default App
