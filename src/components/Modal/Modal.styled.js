import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 99;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: rgba(112, 112, 112, 0.5);
`

export const ModalContent = styled.div`
position: relative;
border: solid 5px red;
border-radius: 20px;
background-color: white;
padding: 20px;
`

export const CloseBtn = styled.button`
position: absolute;
width: 30px;
height: 30px;
top: 10px;
right: 10px;
`