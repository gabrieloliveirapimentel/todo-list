import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 4rem 0 6rem;
    margin: 0 auto;

    background: ${props => props.theme['gray-700']}
`