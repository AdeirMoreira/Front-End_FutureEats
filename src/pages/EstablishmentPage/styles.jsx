import styled from "styled-components";

export const FullScreen = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    padding-bottom: 70px;
`

export const RestaurantData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
`

export const RestName = styled.p`
    font-size: 16px;
    color: #5cb646;
    margin: 0;
    width: 296px;
    font-size: 16px;
    font-weight: bold;
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background: black;
`

export const Paragrafo = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    margin: 0;
`

export const AllCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3{
    margin: 0;    
    }
`

export const Freight = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    img{
    background-color: white;
    height: 20px;
}
`

export const RestaurantLogoImg = styled.img`
    width: 100%;
    height: 120px;
    align-self: center;
    border-radius: 8px;
`
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    padding: 30vh;
`