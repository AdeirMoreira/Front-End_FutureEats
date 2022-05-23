import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
text-align: center;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
align-items: center;
margin-bottom: 20px;
`

export const ScreenContainerProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TitleEndereco = styled.div`
margin-bottom: -30px;
`

export const EnderecoContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
p{
display: flex;
flex-direction: column;
}
`

export const HistoricoContainer = styled.div`
width: 80%;
margin: 5px;
padding: 16px;
border: 1px solid #b8b8b8;
border-radius: 8px;
p{
    margin: 0;
    padding: 2px;
}
`

export const Header = styled.div`
`

export const ContainerDados = styled.div`
display: grid;
grid-template: 
'name pencil' 1fr
'email pencil' 1fr
'cpf pencil' 1fr
/1fr 3fr;
margin-top: 25px;
padding: 0px 8px 0px 8px;
`

export const ContainerName = styled.div`
grid-area: name;
padding: 10px;
p{
margin: 0;
}
`

export const ContainerEmail = styled.div`
grid-area: email;
padding: 10px;
p{
margin: 0;
}
`

export const ContainerCpf = styled.div`
grid-area: cpf;
padding: 10px;
p{
margin: 0;
}
`

export const ContainerButton = styled.div`
grid-area: pencil;
display: flex;
justify-content: flex-end;
align-items: flex-start;
`

export const ContainerEndereco = styled.div`
display: grid;
grid-template: 
'titulo pencil'
'dados pencil'
/1fr;
margin-top: 25px;
background-color: #eeeeee;
padding: 16px;
p{
    margin: 0;
}
`

export const TituloEndereco = styled.div`
grid-area: titulo;
padding: 10px;
p{
margin: 0;
}
`

export const DadosEndereco = styled.div`
grid-area: dados;
padding: 10px;
p{
margin: 0;
}
`

export const ContainerTitulo = styled.div`
width: 88vw;
margin-bottom: 5px;
p{
font-weight: bold;
}
`
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    padding: 30vh;
`
export const Line = styled.div`
    height: 1px;
    width: 100%;
    background: black;
`
export const ErrorMessageContainer = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    img{
        width: 40px;
        height: 40px;
    }
    p{
        font-size: 20px;
        margin-top: 5px;
    }
`