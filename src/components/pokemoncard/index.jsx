import * as React from "react";
import { Container, Img, Name, Type } from "./style"

function PokemonCard({image, name, type}) {
  

    return (
      <Container>
       
        <Img src={image} alt={name}/>
          <Name>{name}</Name>
          <Type>tipo</Type>          
        
      </Container>
    )
  }
  
  export default PokemonCard