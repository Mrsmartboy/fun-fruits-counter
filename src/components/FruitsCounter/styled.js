import styled from 'styled-components'

export const Container=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
 background-color: #ffd569;
`

export const CardContainer=styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 90%;
   background-color: #ffffff;
   border-radius: 10px;
   margin: 10px;
   padding-top: 60px;
   padding-bottom: 60px;
`

export const Header=styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto";
  color: #000000;
  @media screen and (max-width:576px) {
     font-size: 20px;
  }
`

export const SpanElement= styled.span`
  color: #ffd569;
`

export const ImageContainer=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   @media screen and (max-width: 576px) {
       flex-direction: column;
       justify-content: center;
    
   }
`

export const FruitsContainer1=styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px;
`

export const Image = styled.img`
     width: 50%;
     margin: 10px;
`

export const Button =styled.button`
    background-color: #007bff;
    padding: 5px;
    font-size: 15px;
    font-weight: 300;
    font-family: "Roboto";
    border-radius: 5px;
    border: none;
    outline: none;
    color: #ffffff;
    cursor: pointer;
`