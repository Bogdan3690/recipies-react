import styled from "styled-components";

export const List = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit , minmax(220px, 1fr));
gap: 16px;
`

export const ListItem = styled.li`
border: solid 2px red;
border-radius: 25px;
padding: 10px;
`