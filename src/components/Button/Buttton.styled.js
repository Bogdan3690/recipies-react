import styled from "styled-components";

export const Btn = styled.button`
padding: 10px;
border-radius: 15px;
color: aqua;
background-color: #ffffff37;
background-color:${p => p.active ? 'green' : 'white'};
`