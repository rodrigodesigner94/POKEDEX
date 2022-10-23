import Info from '../components/info'
import Pokemon from '../components/pokemon';
import SearchBar from '../components/searchBar';
import List from '../components/list';
import { useEffect, useState } from 'react';
import { Body, Head, Container, LeftBar, CentArea, Arena, Title } from './globalstyle';
import axios from 'axios';



function Home() {
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
    
  return (
    <Body>
    
      <Head />

      <Container>

        

        <LeftBar>
        <SearchBar />

        {pokemons.map((pokemon) => (
            <List name={pokemon.name} />
        ))}
                  
        </LeftBar>

          <CentArea>

            <Title><h1>Pokemon</h1></Title>

            <Arena>
            <Pokemon />
            <Info />
            </Arena>

          </CentArea>

        </Container>

      
    
    </Body>
  )
}

export default Home