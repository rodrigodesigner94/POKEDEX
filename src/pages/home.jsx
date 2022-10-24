import PokemonCard from '../components/pokemoncard';
import SearchBar from '../components/searchBar';
import List from '../components/list';
import React, { useEffect, useState } from 'react';
import { Body, Head, Container, LeftBar, CentArea, ScrollBar} from './globalstyle';
import axios from 'axios';



function Home() {
    const [pokemons, setPokemons] = useState([]);
  useEffect(() =>{
      getPokemons();
    }, []);
    
    const getPokemons = () => {
      var endpoints = [];
      for (var i = 1; i < 200; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
      
    };
       
    const pokemonFilter = (name) => {
      var filteredPokemons = [];
      if (name === "") {
        getPokemons();
      }
      for (var i in pokemons) {
        if (pokemons[i].data.name.includes(name)) {
          filteredPokemons.push(pokemons[i]);
        }
      }
  
      setPokemons(filteredPokemons);                
    }
          
      return (
    <Body>
    
      <Head />

      <Container>     
        <LeftBar>
        <SearchBar pokemonFilter={pokemonFilter} />

        {/* {pokemons.map((pokemon, key) => (
            <List 
              name={pokemon.data.name} 
              key={key}/>
        ))} */}
                  
        </LeftBar>

         <CentArea>         
         <ScrollBar>
          {pokemons.map((poke, key) => (
            <PokemonCard
              id="pokeCard"
              name={poke.data.name}
              image={poke.data.sprites.front_default} 
              type={poke.data.type} 
              key={key} />
            ))}  
        </ScrollBar> 
        </CentArea>
      </ Container>

      
    
    </Body>
  )
}


export default Home