import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import styled from 'styled-components'

import BarraDeNavegacao from "./BarraDeNavegacao";
import Corpo from "./Corpo";

import './estilos/reset.css'


const App = () => {
  const [dadosLocalStorage, setDadosLocalStorage] = useState(localStorage)
  const [titulos, setTitulos] = useState([])
  const [indicePaginaAtiva, setIndicePaginaAtiva] = useState(0)


  
  useEffect(()=>{
  
    if (localStorage.titulos!==undefined){
      console.log('titulos alterados')
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
        titulos={titulos}
        setTitulos={setTitulos}
        setIndicePaginaAtiva={setIndicePaginaAtiva}
      />

      <Corpo 
        titulos={titulos}
        indicePaginaAtiva={indicePaginaAtiva}

      />

      <Botoes>
          <button>Adicionar</button>
          <button>Remover</button>
          <button>Renomear</button>
      </Botoes>

    </Main>

  )
}

const Main = styled.div`
  width: 350px;
  position: relative;
`

const Botoes = styled.div`
    display:  flex;
    width: 350px;
    bottom: 15px;
    justify-content: space-around;
`

const root = createRoot(document.querySelector('.root'))
root.render(<App />)