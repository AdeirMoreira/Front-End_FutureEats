import styled from "styled-components";

export const ListRestaurants = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
margin: 10px;
margin-bottom: 20px;
line-height: 1px;
height: 274px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius:20px;
img{
width: 10rem;
height: 10rem;
border-radius: 25px;
}
h3{
color: #5CB646;
font-size: 20px;
}
`
export const ContainerEntrega = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding: 10px;
p{
color:#b8b8b8;
font-size: 20px;
}
`


