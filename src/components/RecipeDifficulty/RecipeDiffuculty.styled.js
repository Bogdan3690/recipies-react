import styled from "styled-components";

export const TextArea = styled.div`
height: 100px;
color: #000000;
background-color: #fff;
border: solid 1px #ffffff;
border-radius: 25px;
`
export const Text = styled.p`
text-align: start;
font-weight: 900;
padding: 5px;
margin-bottom: 10px;
`
export const Level = styled.span`
padding: 10px;
border-radius: 15px;
color: black;
  background-color: ${({ active }) => (active ? "#d66969" : "#f5f9ab")};
`