import styled from 'styled-components'

export const Grid = styled.div`
    
    border:1px solid red;
    
    `
export const Main = styled.div`
    display: inline-block;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    div{
        /* display:flex; */
        /* justify-content:space-between */
    }
`