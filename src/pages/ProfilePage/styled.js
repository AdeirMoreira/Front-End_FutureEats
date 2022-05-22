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

export const Button = styled.div`
grid-area: pencil;
display: flex;
justify-content: center;
align-items: flex-end;
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
p{
font-weight: bold;
}
`