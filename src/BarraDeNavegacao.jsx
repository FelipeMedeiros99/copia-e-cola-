import { useState } from 'react'
import styled from 'styled-components'

import TelaAdicionarCategoria from './TelaAdicionarCategoria'


const BarraDeNavegacao = (props) =>{
    const {
        titulos,
        setTitulos,
        setIndicePaginaAtiva,
        setDadosLocalStorage,
        indicePaginaAtiva,
    } = props

    const [visibilidadeTelaDeAdicaoDeCategorias, setVisibilidadeTelaDeAdicaoDeCategorias] = useState(false)

    const adicionarCategoria = () =>{
        setVisibilidadeTelaDeAdicaoDeCategorias(true)
    }


    return (
        <Div>
            <Ul className="barra-de-navegacao">
                {titulos.map((titulo, index) => (
                    <li className={index===indicePaginaAtiva?'selecionado':''} onClick={()=>setIndicePaginaAtiva(index)} key={index}>{titulo}</li>
                ))}
                
            </Ul>  

            
            <Icone>
                <ion-icon onClick={adicionarCategoria} name="create-outline"></ion-icon>
            </Icone>

            {visibilidadeTelaDeAdicaoDeCategorias?
            <TelaAdicionarCategoria 
                setIndicePaginaAtiva={setIndicePaginaAtiva}
                setDadosLocalStorage={setDadosLocalStorage}
                titulos={titulos}
                setTitulos={setTitulos}
                setVisibilidadeTelaDeAdicaoDeCategorias={setVisibilidadeTelaDeAdicaoDeCategorias}/>:
            <></>
            }
        </Div>

    )
}

const Div = styled.div`
    ion-icon{
        top: 0;
        right: 0;
        min-width: 15px;
        font-size: 30px;
    }

`


const Icone= styled.div`
    ion-icon{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 30px;
        background-color: rgb(228, 228, 228);
}
`

const Ul = styled.ul`
    display: flex;
    position: relative;
    align-items: center;
    width: 271px;
    height: 36px;
    overflow-y: hidden; 
    overflow-x: scroll;
    background-color: rgb(228, 228, 228); 
    
    &::-webkit-scrollbar{
        background-color: white;
    }

    li{
        height: 100%;
        width: auto;
        white-space: nowrap;
        display: inherit;
        padding: 0 5px 0 5px;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: rgb(228, 228, 228);
    }


    .selecionado{
        background-color: white;
    }

    li:hover{
        background-color: #c0c0c0;
        cursor: pointer;
    }
`


export default BarraDeNavegacao