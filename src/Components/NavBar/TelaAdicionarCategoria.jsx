import styled from 'styled-components'
import { useState } from 'react'
import Button from '../Button'

const TelaAdicionarCategoria = (props) => {

    const {
        setIndicePaginaAtiva,
        setDadosLocalStorage,
        setTitulos,
        setVisibilidadeTelaDeAdicaoDeCategorias,
        titulos,
    } = props

    const [inputCategoria, setInputCategoria] = useState(JSON.parse(JSON.stringify(titulos)))
    const [copiaTitulos, setCopiaTitulos] = useState(JSON.parse(JSON.stringify(titulos)))
    const excluirCategoria = (index) => {
        const copia = [...inputCategoria]
        copia.splice(index, 1)
        setInputCategoria([...copia])

    }

    return (

        <JanelaEdicao>
            
                <Inputs>

                    {inputCategoria.map((titulo, index) => (

                        <div className="linha">
                            <input
                                key={index}
                                type="text"
                                value={inputCategoria[index]}
                                onChange={(e) => {
                                    const conteudo = e.target.value
                                    const copiaConteudo = [...inputCategoria]
                                    copiaConteudo[index] = conteudo
                                    setInputCategoria([...copiaConteudo])
                                }}
                            />
                            <ion-icon onClick={() => excluirCategoria(index)} name="trash-outline"></ion-icon>
                        </div>

                    ))}
                </Inputs>

            

            <ConjuntoBotoes>
                <Button>
                    <p>Novo título</p>
                    <ion-icon
                        onClick={() => {
                            let copia = [...inputCategoria]
                            copia.push('')
                            setInputCategoria([...copia])
                        }}
                        name="add-circle-outline"></ion-icon>
                </Button>
                <Botoes>
                    <Button
                        style={{backgroundColor: "#70e11f", color:"white", fontWeight: "bolder" }}
                        onClick={() => {

                            let copiaInputs = []
                            let elementoRepetido = false
                            for (let i = 0; i < inputCategoria.length; i++) {
                                elementoRepetido = false
                                if (copiaInputs.indexOf(inputCategoria[i]) !== -1) {
                                    elementoRepetido = true
                                }
                                if (!elementoRepetido) {
                                    copiaInputs.push(inputCategoria[i])
                                }

                            }

                            setVisibilidadeTelaDeAdicaoDeCategorias(false)
                            setTitulos(JSON.parse(JSON.stringify(copiaInputs)))
                            localStorage.setItem('titulos', JSON.stringify(inputCategoria))


                            for (let i = 0; i < copiaTitulos.length; i++) {
                                localStorage.setItem(inputCategoria[i], localStorage[copiaTitulos[i]])
                            }

                            setDadosLocalStorage(localStorage)
                        }
                        }>
                        Salvar
                    </Button>

                      <Button style={{backgroundColor: "#f3493c", color: "white", fontWeight: "bolder"}} hoverColor="#307a8d" onClick={() => setVisibilidadeTelaDeAdicaoDeCategorias(false)}>
                          Cancelar
                      </Button>
                </Botoes>
            </ConjuntoBotoes> 
        </JanelaEdicao>

    )
}

const JanelaEdicao = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 540px;
    z-index: 5;
    background-color: #ffffff;
    box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.6);
`

const Inputs = styled.div`
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 350px;
    margin-bottom: 50px;
    .linha{
        /* width: 300px; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        ion-icon{
            margin-left: 10px;
        }
    }
`

const ConjuntoBotoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 4;
    bottom: 0;
    /* width: 300px; */
`


const Icone = styled.div`

    bottom: 45px;
`


const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    width: 100%;
    @media(max-width:500px){
    min-width: 30px;
  }

`

export default TelaAdicionarCategoria