import { useState } from 'react'
import styled from 'styled-components'
import { FaChevronDown } from "react-icons/fa";

import TelaAdicionarCategoria from './TelaAdicionarCategoria'


const BarraDeNavegacao = (props) => {
    const {
        titulos,
        setTitulos,
        setIndicePaginaAtiva,
        setDadosLocalStorage,
        indicePaginaAtiva,
    } = props

    const [dropDown, setDropdow] = useState(false)
    const [visibilidadeTelaDeAdicaoDeCategorias, setVisibilidadeTelaDeAdicaoDeCategorias] = useState(false)

    const adicionarCategoria = () => {
        setVisibilidadeTelaDeAdicaoDeCategorias(true)
    }


    return (
        <Div>
            <Ul className="barra-de-navegacao">
                <div
                    onMouseEnter={() => setDropdow(true)}
                    onMouseLeave={() => setDropdow(false)} >
                    {titulos.map((titulo, index) => {
                        
                            {
                                if(dropDown){
                                return( 
                                <li
                                    className={'selecionado'}
                                    onMouseEnter={() => setIndicePaginaAtiva(index)}
                                    onClick={() => {
                                        setIndicePaginaAtiva(index)
                                        setDropdow(!dropDown)
                                    }}
                                    key={index}>{
                                        titulo}
                                </li>)}
                                
                                return(
                                <li
                                    className={index === indicePaginaAtiva ? 'selecionado' : 'oculto'}
                                    onClick={() => {
                                        setIndicePaginaAtiva(index)
                                        setDropdow(!dropDown)
                                    }} key={index}>{titulo} <FaChevronDown />
                                </li>)
                            }

                    
})}
                </div>

            </Ul>


            <Icone onClick={() => adicionarCategoria()} >
                <p>Editar títulos</p>
                <ion-icon name="create-outline"></ion-icon>
            </Icone>

            {visibilidadeTelaDeAdicaoDeCategorias ?
                <TelaAdicionarCategoria
                    setIndicePaginaAtiva={setIndicePaginaAtiva}
                    setDadosLocalStorage={setDadosLocalStorage}
                    titulos={titulos}
                    setTitulos={setTitulos}
                    setVisibilidadeTelaDeAdicaoDeCategorias={setVisibilidadeTelaDeAdicaoDeCategorias} /> :
                <></>
            }
        </Div>

    )
}


// const color

const Div = styled.div`
    position: relative;
    height: 36px;
    background-color: white;//#e1e1e1;
    ion-icon{
        top: 0;
        right: 0;
        min-width: 15px;
        font-size: 30px;
    }

`


const Icone = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 36px;
    background-color: rgb(255, 255, 255);
    font-size: 20px;    
    width: 150px;
    background-color: white;//#e1e1e1;
    
    border-bottom: solid 1px #00000029;

    &:hover{
        cursor: pointer;
        background-color: #eeeeee;
        z-index: 3;
    }

`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    align-items: left;
    height: 100%;
    margin-right: 30px;
    width: 100%;
    border-bottom: solid 1px #00000029;
    div{
        width: 250px;
        z-index: 4;
    }


    li{
        font-size: 20px;
        background-color: white;//#e1e1e1;
        height: 36px;
        position: absolute;
        width: 100%;
        white-space: nowrap;
        display: inherit;
        padding: 0 5px 0 5px;
        text-align: left;
        align-items: center;
        justify-content: left;
        border-bottom: solid 1px #00000029;
        border-right: solid 1px #00000029;
        overflow: hidden;
    }

    li.oculto{
        display: none;
    }

    li.selecionado{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: static;
  
    }

    li:hover{
        background-color: #eeeeee;
        cursor: pointer;
    }
`


export default BarraDeNavegacao