import {Form, Searcher, Button} from './style';

function SearchBar () {
  

  return (
    
      <Form>
        <Searcher type={"text"} name="busca" defaultValue={"Procurar Pokemon"} />
        <Button >Buscar</Button>
      </Form>   
    
    
  )
}

export default SearchBar