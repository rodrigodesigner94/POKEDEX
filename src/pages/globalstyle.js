import styled from "styled-components";


export const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-image:url(https://i.pinimg.com/originals/33/c4/6e/33c46ea41e5b0fca20d30c9b7a2ca31a.png) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    align-items: center;
    
`
export const Head = styled.div`
    margin-top: 20px;
    height: 6.5rem;
    width: 100vw;
    background-image:url(https://fontmeme.com/permalink/221020/59982229048a57ee28eacd01a18160a4.png) ;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;
    align-items: center;
`
export const Container = styled.div`
display: flex;
`
export const LeftBar = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
    height: 25rem;
    width: 12rem;
    scroll-behavior: smooth;
    margin-right:1em ;
    
`
export const CentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    padding-left: 12em;
    padding-right: 12em;
`
export const Arena = styled.div`
    display: flex;
    align-items: center;
`
export const Title = styled.div`
    color: white;
    font-family: 'Silkscreen', cursive;
    margin-bottom: 2rem;
`