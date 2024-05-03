import { useState } from 'react'
import styled from 'styled-components'

import TelaAdicionarCategoria from './TelaAdicionarCategoria'


const BarraDeNavegacao = (props) =>{
    const {
        titulos,
        setTitulos,
        setIndicePaginaAtiva,
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
    width: 100%;
    justify-content: right;

    li{
        display: inherit;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 100px;
    }

    li:hover{
        background-color: #e2e2e2;
        cursor: pointer;
    }
`


export default BarraDeNavegacao