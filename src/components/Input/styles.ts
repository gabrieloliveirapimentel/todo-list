import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    
    justify-content: center;
    align-items: center;

    gap: 8px;
    margin-top: -1.5rem;

    max-width: 728px;

    input, button {
        height: 52px;
        padding: 16px;

        border: none;
        border-radius: 8px;
    }

    input {
        width: 100%;

        color: ${props => props.theme['gray-100']};
        background-color: ${props => props.theme['gray-500']};

        &::placeholder {
            color: ${props => props.theme['gray-300']};
        }

        &:focus {
        box-shadow: 0 0 0 2px ${props => props.theme['purple-dark']};
        }
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 8px;
        color: ${props => props.theme['gray-100']};
        background-color: ${props => props.theme['blue-dark']};

        font-size: 0.9rem;
        font-weight: 700;

        &:hover {
            background-color: ${props => props.theme.blue};
        }
    }
`