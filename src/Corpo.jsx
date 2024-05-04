import { useEffect, useState } from "react"
import styled from 'styled-components'


const Corpo = (props) => {

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

                        <Container>
                            <p key={index}>{texto}</p>
                            <button>Copiar</button>
                        </Container>
                    ))}
                </Textos>

                {visibilidadeInput ?
                    (<div className="container-novo-texto">
                        <textarea
                            rows={2}
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
                                    if (inputDeNovoTexto.length > 0) {
                                        copiaTextos.push(inputDeNovoTexto)
                                    }
                                    setTextos([...copiaTextos])
                                    setInputDeNovoTexto('')
                                    localStorage.setItem(tituloPagina, JSON.stringify(textos))

                                }}
                            >salvar</button>
                            <button
                                onClick={() => {
                                    setVisibilidadeInput(false)
                                    setInputDeNovoTexto('')
                                }
                                }
                            >cancelar</button>
                        </Botoes>
                    </div>) : (<></>)
                }
            </Main>

            <Icone>
                
                <ion-icon
                    onClick={() => {
                        setVisibilidadeInput(true)
                    }}
                    name="add-circle-outline"></ion-icon>
            </Icone>
        </>
    )
}

export default Corpo

const Icone = styled.div`
    width: 300px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content:center;
    ion-icon{
        font-size: 30px;
    }

`

const Botoes = styled.div`
    
`

const Main = styled.main`
    overflow-y: auto;
    overflow-x: hidden;
    height: 280px;
    width: 300px;
    box-shadow: 0px 1px 2px black;
`

const Textos = styled.div`
   height: 250px;

`

const Container = styled.div`
    display: flex;
    padding: 0 20px 10px 10px;
    justify-content: space-between;
    align-items: center;
    width: 300px;   
    height: 100px;
    box-shadow: 0 1px 3px rgb(0, 0, 0, 0.7);
    margin-bottom: 10px;
    p{
        padding: 10px;
        width: 170px;
        height: 70px;
        overflow: auto;
        box-shadow: 0 1px 3px rgb(0, 0, 0, 0.7);

    }


`