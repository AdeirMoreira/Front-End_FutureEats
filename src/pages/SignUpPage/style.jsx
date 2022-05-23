import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
text-align: center;
img{
    width: 150px;
}
`
export const InputsContainer = styled.div`
padding-top:5vw;
display: flex;
flex-direction: column;
width: 80vw;
align-items: center;
margin-bottom: 20px;
`

export const ErrorMessageContainer = styled.div`
    height: 40px;
    padding: 16px 16px 0px 16px;
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
