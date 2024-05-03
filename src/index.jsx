import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import styled from 'styled-components'

import BarraDeNavegacao from "./BarraDeNavegacao";
import Corpo from "./Corpo";

import './estilos/reset.css'


const App = () => {
  const [titulos, setTitulos] = useState(JSON.parse(localStorage.titulos))
  const [indicePaginaAtiva, setIndicePaginaAtiva] = useState(0)

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
    <div>
      <BarraDeNavegacao
        titulos={titulos}
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

    </div>

  )
}

const Botoes = styled.div`
    display:  flex;
    width: 350px;
    bottom: 15px;
    justify-content: space-around;
`

const root = createRoot(document.querySelector('.root'))
root.render(<App />)