import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import styled from 'styled-components'

import BarraDeNavegacao from "./BarraDeNavegacao";
import Corpo from "./Corpo";

import './estilos/reset.css'
import './estilos/estilo.css'


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
      localStorage.setItem('titulos', '[]')
    }
    
    titulos.map((titulo) => {
      if (localStorage[titulo] === undefined) {
        localStorage.setItem(titulo, '[]')
      }
    })
  }

  verificarSeDadosEstaoSalvosNoLocalStorage()

  return (
    <Main>
      <BarraDeNavegacao
        setDadosLocalStorage={setDadosLocalStorage}
        titulos={titulos}
        setTitulos={setTitulos}
        setIndicePaginaAtiva={setIndicePaginaAtiva}
        indicePaginaAtiva={indicePaginaAtiva}
      />

      <Corpo 
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
  max-width: 600px;
`

const Botoes = styled.div`
    display:  flex;
    bottom: 15px;
    justify-content: space-around;
`

const root = createRoot(document.querySelector('.root'))
root.render(<App />)