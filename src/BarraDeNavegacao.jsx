import { useState } from 'react'
import styled from 'styled-components'

import TelaAdicionarCategoria from './TelaAdicionarCategoria'


const BarraDeNavegacao = (props) =>{
    const {
        titulos,
        setTitulos,
        setIndicePaginaAtiva,
        setDadosLocalStorage
    } = props

    const [visibilidadeTelaDeAdicaoDeCategorias, setVisibilidadeTelaDeAdicaoDeCategorias] = useState(false)

    const adicionarCategoria = () =>{
        setVisibilidadeTelaDeAdicaoDeCategorias(true)
    }


    return (
        <>
            <Ul className="barra-de-navegacao">
                {titulos.map((titulo, index) => (
                    <li onClick={()=>setIndicePaginaAtiva(index)} key={index}>{titulo}</li>
                ))}
                <ion-icon onClick={adicionarCategoria} name="create-outline"></ion-icon>
            </Ul>  

            {visibilidadeTelaDeAdicaoDeCategorias?
            <TelaAdicionarCategoria 
                setIndicePaginaAtiva={setIndicePaginaAtiva}
                setDadosLocalStorage={setDadosLocalStorage}
                titulos={titulos}
                setTitulos={setTitulos}
                setVisibilidadeTelaDeAdicaoDeCategorias={setVisibilidadeTelaDeAdicaoDeCategorias}/>:
            <></>
            }
        </>
    )
}


const Ul = styled.ul`
    display: flex;
    position: relative;
    align-items: center;
    width: 285px;
    height: 30px;
    overflow-x: scroll;
    overflow-y: hidden; 

    li{
        width: auto;
        white-space: nowrap;
        display: inherit;
        padding: 0 5px 0 5px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    ion-icon{
        position: fixed;
        left: 285px;
        min-width: 15px;

    }

    li:hover{
        background-color: #e2e2e2;
        cursor: pointer;
    }
`


export default BarraDeNavegacao