import * as React from "react";
import { Listing, Li } from "./style"

function List({name}) {
      
    return (
      <Listing>      
        <Li>        
            {name}                    
        </Li>    
      </Listing>  
    )
  }
  
  export default List