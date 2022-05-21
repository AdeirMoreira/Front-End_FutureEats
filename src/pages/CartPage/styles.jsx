import styled from "styled-components";

export const FullScreen = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const Products = styled.div`
    padding: 16px;
`
export const CartWithItens = styled.div`
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    padding: 16px;
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
export const MessagePopUP = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    padding: 20px;
    button{
        width: fit-content;
        background: none;
        border: none;
        align-self: flex-end;
        img{
            width: 30px;
            height: 30px;
        }
    }
    p{
        font-size: 20px;
    }
`
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 75px;
    background-color: #eeeeee;
    padding: 16px;
    p:nth-of-type(1){
        font-size: 16px;
        color: #b8b8b8;
        margin: 0;
    }
    p:nth-of-type(2){
        font-size: 16px;
        color: black;
        margin: 0;
    }
`
export const Freight = styled.p`
    text-align: right;
`
export const Invoicing = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
    Button{
        align-self: flex-end;
    }
    button{
        justify-self: flex-end;
    }
`
export const TotalPrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span:nth-of-type(2){
        color: #5cb646;
        font-size: 16px;
    }
`
export const Vazio = styled.div`
    text-align: center;
`
export const Line = styled.div`
    height: 1px;
    width: 100%;
    background: black;
    margin-bottom: 20px;
`
export const Paymentmethod = styled.div`
    display: flex;
    flex-direction: column;
`
export const Radio = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const RestaurtData = styled.div`
    p:nth-of-type(1){
        font-size: 16px;
        color: #5cb646;
    }
    p:nth-of-type(2), p:nth-of-type(3){
        color: #b8b8b8;
        font-size: 16px;
        align-self: flex-end;
    }
`
export const Teste = styled.div`
    display: flex;
    flex: 1;
    button{
        align-self: flex-end;
        margin: 20px 0px 50px 0px;
    }
`