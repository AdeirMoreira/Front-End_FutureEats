import { DeleteForeverOutlined } from "@material-ui/icons";
import styled from "styled-components";

export const ContainerRestaurants = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0px;
`

export const ListRestaurants = styled.div`
width: 328px;
height: 188px;
padding: 0 0 16px;
border-radius: 8px;
border: solid 1px #b8b8b8;
margin: 10px 0px;
img{
object-fit: cover;
width: 100%;
height: 100%;
margin: 0 0 12px;
border-radius: 8px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;
background-color: #d8d8d8;
}
`

export const ContainerImg = styled.div`
width: 328px;
height: 120px;
`

export const ContainerName = styled.div`
width: 296px;
height: 18px;
margin: 12px 16px 4px;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
color: #5cb646;
`

export const ContainerEntrega = styled.div`
display: flex;
justify-content: space-between;
margin: 0 15px;
color: #b8b8b8;
`

export const DeliveryTime = styled.div`
display: flex;
flex-direction: flex-start;
align-items: center;
justify-content: center;
gap: 5px;
img{
background-color: white;
height: 20px;
}
p{
padding-bottom: 10px;
}
`

export const Shipping = styled.div`
display: flex;
flex-direction: flex-end;
align-items: center;
gap: 5px;
img{
background-color: white;
height: 20px;
width: 20px;
}
p{
padding-bottom: 10px;
}
`