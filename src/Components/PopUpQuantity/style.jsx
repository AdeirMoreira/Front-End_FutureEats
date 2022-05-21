import styled from "styled-components"

export const SelectQuantidade = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    padding: 0px 16px 0px 16px;
    height: 216px;
    p{
        margin-top: 43px;
    }
    select{
        height: 56px;
    }
    button{
        margin-top: 28px;
        width: fit-content;
        align-self: flex-end;
    }
`
export const PopUp = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`