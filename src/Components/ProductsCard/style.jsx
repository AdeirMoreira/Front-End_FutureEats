import styled from "styled-components"

export const CardProduct = styled.div`
    display: grid;
    grid-template: 
    "photo Resname Resname Resname Resname Resname quantidade" 60px
    "photo descrição descrição descrição descrição descrição descrição" 60px
    "photo preço preço preço preço botão botão" 60px
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    p{
        margin: 0;
    }
`

export const Photo = styled.div`
    grid-area: photo;
`

export const Name = styled.div`
    grid-area: Resname;
    padding: 10px;
    color: #5cb646;
    font-size: 16px;
    font-weight: bold;
`
export const Quantity = styled.div`
    grid-area: quantidade;
    color: #5cb646;
    border-radius: 8px;
    border: solid 1px #5cb646;
    margin: 0 0 11px 16px;
    padding: 7px 12px;
    text-align: center;
    border-bottom-right-radius: 0;
`

export const Description = styled.div`
    grid-area: descrição;
    padding: 10px;
    font-size: 12px;
    color: #b8b8b8;
`

export const Price = styled.div`
    grid-area: preço;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
`

export const ButtonDiv = styled.div`
    grid-area: botão;
`

export const ProductImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 8px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
`

export const ButtonVerde = styled.button`
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 8px;
    border: solid 1px #5cb646;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    background: none;
    color: #5cb646;
`

export const ButtonVermelho = styled.button`
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 8px;
    border: solid 1px #e02020;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    background: none;
    color: #e02020;
`