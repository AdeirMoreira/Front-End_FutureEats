import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 15vh;
img{
    width: 150px;
    margin-bottom: 50px;
}
`
export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
align-items: center;
margin-bottom: 20px;
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
