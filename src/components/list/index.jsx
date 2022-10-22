import { Listing, Li,  } from "./style"
import axios from 'axios';
import { useEffect, useState } from 'react';



function List() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() =>{
      getPokemons();
    }, []);
    
    const getPokemons = () => {   
      axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10000")
      .then((res) => setPokemons(res.data.results))
      .catch((err) =>console.log(err));
    };
    
      

    // ord
    const pokemonsList = pokemons.map(({name}) => name);
    const ordenedPokemons = pokemonsList.sort();
      
    return (
      <Listing id="listin">
      {ordenedPokemons.map((pokemon) =>{
              
        return(
          
          <Li>
            {pokemon}
            </Li>
        )
      } )}
        
      
      </Listing>
      
    )
  }
  
  export default List