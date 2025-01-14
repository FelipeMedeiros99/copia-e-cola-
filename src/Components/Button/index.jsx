import styled from "styled-components"

const Button = ({children, ...props})=>{
  return(

    <ContainerButton>
      <ButtonStyle {...props}>{children}</ButtonStyle>
    </ContainerButton>
  )
}



const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
`

const ButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;//#1ec2ac;
    width: auto;
    min-width: 150px;
    border-radius: 50px;
    font-size: 19px;
    padding: 10px;
    box-shadow: 0px 2px 7px #00000085;
    ion-icon{
        font-size: 30px;
    }

    &:hover{
        background-color: #dbdbdb;//#1bac98;
        cursor: pointer;
    }

`


export default Button