import styled from 'styled-components'


const BarraDeNavegacao = (props) =>{
    const {
        titulos,
        setIndicePaginaAtiva,
    } = props


    return (
       titulos !== undefined?
        (   
            <Ul className="barra-de-navegacao">
                {titulos.map((titulo, index) => (
                    <li onClick={()=>setIndicePaginaAtiva(index)} key={index}>{titulo}</li>
                ))}
            </Ul>  
        ):(<></>)
    )
}


const Ul = styled.ul`
    display: flex;
    
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