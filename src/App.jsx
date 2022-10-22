import Info from './components/info'
import Pokemon from './components/pokemon';
import SearchBar from './components/searchBar';
import List from './components/list';
import { useEffect, useState } from 'react';
import { Body, Head, Container, LeftBar, CentArea, Arena, Title } from './globalstyle';
import axios from 'axios';
import './App.css'


function App() {
    
  return (
    <Body>
    
      <Head />

      <Container>

        

        <LeftBar>
        <SearchBar />
        <List />
                  
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

export default App
