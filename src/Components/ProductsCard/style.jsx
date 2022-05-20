import styled from "styled-components"

export const CardProduct = styled.div`
    display: grid;
    grid-template: 
    "photo Resname Resname Resname Resname Resname quantidade" 60px
    "photo descrição descrição descrição descrição descrição descrição" 60px
    "photo preço preço preço preço botão botão" 60px
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    p{
        margin: 0;
    }
`
export const Photo = styled.div`
    grid-area: photo;
    background-color: red;
`

export const Name = styled.div`
    grid-area: Resname;
    padding: 10px;
    background-color: blue;
`
export const Quantity = styled.div`
    grid-area: quantidade;
    background-color: green;
    text-align: center;
`
export const Description = styled.div`
    grid-area: descrição;
    padding: 10px;
    background-color: gray;
`
export const Price = styled.div`
    grid-area: preço;
    padding: 10px;
    background-color: yellow;
`
export const ButtonDiv = styled.div`
    grid-area: botão;
    background-color: tomato;
`
export const ProductImg = styled.img`
    width: 180px;
    height: 180px;
`
export const Button = styled.button`
    width: 100%;
    height: 100%;
    text-align: center;
`