import { useEffect, useState } from "react"
import styled from 'styled-components'

import Button from "../Button"

const Body = (props) => {

    const {
        dadosLocalStorage,
        setDadosLocalStorage,
        titulos,
        indicePaginaAtiva
    } = props

    const [tituloPagina, setTituloPagina] = useState('')
    const [textos, setTextos] = useState([])
    const [inputDeNovoTexto, setInputDeNovoTexto] = useState('')
    const [visibilidadeInput, setVisibilidadeInput] = useState(false)
    const [indiceDoTexto, setIndiceDoTexto] = useState(null)

    useEffect(() => {
        if (titulos[indicePaginaAtiva] !== undefined) {
            setTituloPagina(titulos[indicePaginaAtiva])
        }
    }, [indicePaginaAtiva, titulos])

    useEffect(() => {
        localStorage.setItem(tituloPagina, JSON.stringify([...textos]))
        setDadosLocalStorage({ ...localStorage })

    }, [titulos, visibilidadeInput])

    useEffect(() => {
        if (localStorage[tituloPagina] !== undefined) {
            setTextos(JSON.parse(localStorage[tituloPagina]))
        }
    }, [tituloPagina, indicePaginaAtiva, dadosLocalStorage])

    useEffect(() => {
        if (localStorage[tituloPagina] !== undefined) {
            const textosDaPagina = JSON.parse(localStorage[tituloPagina])
            setTextos(textosDaPagina)
        }
    }, [tituloPagina, dadosLocalStorage])

    return (

        <>
            <Main>
                <Textos>
                    {textos.map((texto, index) => (

                        <Container key={index}>
                            <p >{texto}</p>
                            <button

                                onClick={() => {
                                    navigator.clipboard.writeText(texto)
                                }
                                }
                            >Copiar</button>

                            <Icones>
                                <ion-icon name="create-outline" onClick={() => {
                                    setInputDeNovoTexto(texto)
                                    setVisibilidadeInput(true)
                                    setIndiceDoTexto(index)
                                }
                                }></ion-icon>
                                <ion-icon onClick={() => {
                                    let copiaTextos = [...textos]
                                    copiaTextos.splice(index, 1)
                                    setTextos([...copiaTextos])

                                    localStorage.setItem(tituloPagina, JSON.stringify(copiaTextos))

                                }} name="trash-outline"></ion-icon>

                            </Icones>
                        </Container>
                    ))}
                </Textos>

                {visibilidadeInput ?
                    (

                        <div className="container-novo-texto">
                            <p>Insira o texto:</p>
                            <textarea

                                rows={4}
                                cols={30}
                                value={inputDeNovoTexto}
                                onChange={(event) => {
                                    const texto = event.target.value
                                    setInputDeNovoTexto(texto)
                                }}
                            ></textarea>

                            <Botoes>
                                <button
                                    onClick={() => {
                                        setVisibilidadeInput(false)
                                        let copiaTextos = [...textos]
                                        if (indiceDoTexto === null) {
                                            if (inputDeNovoTexto.length > 0) {
                                                copiaTextos.push(inputDeNovoTexto)
                                            }
                                        } else {
                                            copiaTextos[indiceDoTexto] = inputDeNovoTexto
                                        }
                                        setTextos([...copiaTextos])
                                        setInputDeNovoTexto('')
                                        localStorage.setItem(tituloPagina, JSON.stringify(textos))
                                        setIndiceDoTexto(null)

                                    }}
                                >salvar</button>
                                <button
                                    onClick={() => {
                                        setVisibilidadeInput(false)
                                        setIndiceDoTexto(null)
                                        setInputDeNovoTexto('')
                                    }
                                    }
                                >cancelar</button>
                            </Botoes>
                        </div>) : (<></>)
                }
            </Main>

                <Button onClick={() => setVisibilidadeInput(true)}>
                    <ion-icon name="add-circle-outline" />
                    <p >Novo texto</p>
                </Button>
        </>
    )
}

export default Body


const Icones = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 20px;

    ion-icon:hover{
        cursor: pointer;
        background-color: #dfdbdb;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    min-width: 300px;
    @media(max-width:500px){
        min-width: 30px;
       
  }
`

const Main = styled.main`
    overflow-y: auto;
    overflow-x: hidden;
    height: 400px;
    /* width: 300px; */
    margin-top: 31px;
    
    .container-novo-texto{
        position: absolute;
        top: 0;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffffffd5;
        width: 100%;
        height: 360px;
    }

    textarea{
        resize:none;
    }

`

const Textos = styled.div`
   height: 250px;

`

const Container = styled.div`
    display: flex;
    position: relative;
    padding: 0 10px 10px 10px;
    justify-content: space-between;
    align-items: center;
    /* width: 300px;    */
    height: 100px;
    box-shadow: 0 1px 3px rgb(0, 0, 0, 0.7);
    margin-bottom: 10px;
    


    p{
        padding: 10px;
        white-space: pre-line;
        width: 300px;
        height: 70px;
        overflow: auto;
        box-shadow: 0 1px 3px rgb(0, 0, 0, 0.7);

    }


`