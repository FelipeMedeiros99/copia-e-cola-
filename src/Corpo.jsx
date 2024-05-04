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

    useEffect(()=>{
        if(titulos[indicePaginaAtiva]!==undefined){
            setTituloPagina(titulos[indicePaginaAtiva])
        }
    }, [indicePaginaAtiva, titulos])

    useEffect(()=>{
        localStorage.setItem(tituloPagina, JSON.stringify([...textos]))
        setDadosLocalStorage({...localStorage})

    }, [titulos, visibilidadeInput])
    
    useEffect(()=>{
        if(localStorage[tituloPagina] !== undefined){
            setTextos(JSON.parse(localStorage[tituloPagina]))
        }
    }, [tituloPagina, indicePaginaAtiva, dadosLocalStorage])

    useEffect(()=>{
        if(localStorage[tituloPagina]!==undefined){
            const textosDaPagina = JSON.parse(localStorage[tituloPagina])
            setTextos(textosDaPagina)
        }
    }, [tituloPagina, dadosLocalStorage])

    console.log("------------------------------------------------")
    console.log("consoles em corpo:")
    console.log('titulos: ', titulos)
    console.log('indice da pagina: ', indicePaginaAtiva)
    console.log('local storage: ', localStorage)
    console.log('titulo da pagina: ', tituloPagina)
    console.log('textos: ', textos)
    console.log("localStorage na parte pagina:", localStorage[tituloPagina])
    console.log("------------------------------------------------")


    return(
        <Main>
            <Textos>
                {textos.map((texto, index) => (
                    
                    <Container>
                        <p key={index}>{texto}</p>
                        <button>Copiar</button>
                    </Container>
                ))}
            </Textos>

            {visibilidadeInput?
                (<div className="container-novo-texto">
                    <textarea 
                        rows={2} 
                        cols={30}
                        value={inputDeNovoTexto}
                        onChange={(event)=>{
                            const texto = event.target.value
                            setInputDeNovoTexto(texto)
                        }}
                        ></textarea>
                    <Botoes>
                        <button
                            onClick={()=>{
                                // setVisibilidadeInput(false)
                                let copiaTextos = [...textos]
                                if(inputDeNovoTexto.length>0){
                                    copiaTextos.push(inputDeNovoTexto)
                                }
                                setTextos([...copiaTextos])
                                setInputDeNovoTexto('')
                                localStorage.setItem(tituloPagina, JSON.stringify(textos))

                            }}
                        >salvar</button>
                        <button 
                            onClick={()=>{
                                setVisibilidadeInput(false)
                                setInputDeNovoTexto('')
                                }
                            }
                        >cancelar</button>
                    </Botoes>
                </div>):(<></>)
            }

            <ion-icon 
                onClick={()=>{
                    setVisibilidadeInput(true)
                }}
                name="add-circle-outline"></ion-icon>
        </Main>
    )
}

export default Corpo

const Botoes = styled.div`
    
`

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