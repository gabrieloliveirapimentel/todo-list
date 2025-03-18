import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-between;

    margin: 0 auto 1rem auto;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['gray-400']};
    background-color: ${props => props.theme['gray-500']};

    height: 72px;
    padding: 16px;

    button {
        border: none;
        background-color: transparent;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;

    gap: 12px;
`

interface TextProps {
    isDone?: boolean;
}

export const Text = styled.span<TextProps>`
    font-size: 1rem;
    color: ${props => props.isDone ? props.theme['gray-300'] : props.theme['gray-100']};

    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`