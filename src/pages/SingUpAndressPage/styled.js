import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;


`
export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
align-items: center;
margin-top:10vw;
`
export const Header = styled.div`

`

export const ErrorMessageContainer = styled.div`
    height: 40px;
    padding: 30px 16px 0px 16px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
    }
    p{
        font-size: 20px;
        margin-top: 5px;
    }
`