import styled from 'styled-components'
import { useState } from 'react'

const TelaAdicionarCategoria = (props) => {

    const {
        setTitulos,
        setVisibilidadeTelaDeAdicaoDeCategorias,
        titulos,
    } = props

    const [inputCategoria, setInputCategoria] = useState(JSON.parse(JSON.stringify(titulos)))


    const fecharTela = () => {
        setVisibilidadeTelaDeAdicaoDeCategorias(false)
    }


    const excluirCategoria = (index) => {
        const copia = [...inputCategoria]
        copia.splice(index, 1)
        setInputCategoria([...copia])
    }

    return (
        <Div>
            {inputCategoria.map((titulo, index) => (

                <div className="linha">
                    <input
                        type="text"
                        value={inputCategoria[index]}
                        onChange={(e) => {
                            const conteudo = e.target.value
                            const copiaConteudo = [...inputCategoria]
                            copiaConteudo[index] = conteudo
                            setInputCategoria([...copiaConteudo])
                        }}
                    />
                    <ion-icon onClick={(index) => excluirCategoria(index)} name="trash-outline"></ion-icon>
                </div>

            ))}
            
            <ion-icon onClick={()=>{
                        let copia = [...inputCategoria]
                        copia.push('')
                        setInputCategoria([...copia])
                    }} name="add-circle-outline"></ion-icon>

            <Botoes>
                <button onClick={() => {
                    setVisibilidadeTelaDeAdicaoDeCategorias(false)
                    setTitulos(JSON.parse(JSON.stringify(inputCategoria)))
                }}>
                    Salvar
                </button>

                <button onClick={() => setVisibilidadeTelaDeAdicaoDeCategorias(false)}>
                    Cancelar
                </button>
            </Botoes>
        </Div>
    )
}

const Div = styled.div`
    position: absolute;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 350px;
    height: 320px;
    background-color: #e6e6e697;

`

const Botoes = styled.div`
    display: flex;
`

export default TelaAdicionarCategoria