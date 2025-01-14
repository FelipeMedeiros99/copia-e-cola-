import { useEffect, useState } from "react";
import styled from 'styled-components'

import NavBar from "./NavBar";
import Body from "./Body";


import '../estilos/reset.css'
import '../estilos/estilo.css'


const App = () => {
  const [dadosLocalStorage, setDadosLocalStorage] = useState(localStorage)
  const [titulos, setTitulos] = useState([])
  const [indicePaginaAtiva, setIndicePaginaAtiva] = useState(0)


  
  useEffect(()=>{
    if (localStorage.titulos!==undefined){
      setTitulos(JSON.parse(localStorage.titulos))
    }
  }, [dadosLocalStorage])

  useEffect(()=>{
    localStorage.setItem('titulos', JSON.stringify(titulos))
    setDadosLocalStorage(localStorage)
  }, [titulos])

  const verificarSeDadosEstaoSalvosNoLocalStorage = () => {
    if(localStorage.titulos===undefined){
      localStorage.setItem('titulos', '["Meus textos"]')
    }
    
    titulos.map((titulo) => {
      if (localStorage[titulo] === undefined) {
        localStorage.setItem(titulo, '["Adicione seu texto aqui"]')
      }
    })
  }

  verificarSeDadosEstaoSalvosNoLocalStorage()
  return (
    <Main>
      <NavBar
        setDadosLocalStorage={setDadosLocalStorage}
        titulos={titulos}
        setTitulos={setTitulos}
        setIndicePaginaAtiva={setIndicePaginaAtiva}
        indicePaginaAtiva={indicePaginaAtiva}
      />

      <Body 
        dadosLocalStorage={dadosLocalStorage}
        setDadosLocalStorage={setDadosLocalStorage}
        titulos={titulos}
        indicePaginaAtiva={indicePaginaAtiva}
      />
  
    </Main>

  )
}

const Main = styled.div`
  position: relative;
  min-width: 400px;
  max-width: 500px;
  @media(max-width:500px){
    min-width: 300px;
    max-width: 500px;
  }
  
  box-shadow: 0px 1px 2px black;

`

const Botoes = styled.div`
    display:  flex;
    bottom: 15px;
    justify-content: space-around;
`

export default App;
