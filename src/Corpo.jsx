import { useEffect, useState } from "react"
import styled from 'styled-components'


const Corpo = (props) => {
    
    const {
        titulos,
        indicePaginaAtiva
    } = props


    const [tituloPagina, setTituloPagina] = useState('')
    const [textos, setTextos] = useState([])


    useEffect(()=>{
        setTituloPagina(titulos[indicePaginaAtiva])
    }, [indicePaginaAtiva])

    
    useEffect(()=>{
        if(localStorage[tituloPagina] !== undefined){
            setTextos(JSON.parse(localStorage[tituloPagina]))
        }
    }, [tituloPagina])


    return(
        <Main>
            <Textos>
                {textos.length>0?
                textos.map = ((texto, index) => (
                    <Container>
                        <p key={index}>{texto}</p>
                        <button>Copiar</button>
                    </Container>
                )):
                (<></>)}
            </Textos>
        </Main>
    )
}

export default Corpo

const Main = styled.main`
    background-color: aliceblue;
    height: 280px;
    width: 350px;
    
`

const Textos = styled.div`
   height: 250px;
`

const Container = styled.div`
    display: flex;
    height: 65px;
    width: 350px;   
    background-color: cyan;
`