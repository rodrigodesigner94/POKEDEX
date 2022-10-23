import * as React from "react";
import {Form, Searcher, Button} from './style';

function SearchBar ({pokemonFilter}) {
  

  return (
    
      <Form onChange={(e) => pokemonFilter(e.target.value)} >
        <Searcher  placeholder='Buscar Pokemon' />        
      </Form>   
    
    
  )
}

export default SearchBar