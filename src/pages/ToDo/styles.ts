import styled from "styled-components";


export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin: 5rem auto 0 auto;

    width: 100%;
    max-width: 728px;

    span {
        font-size: 0.875rem;
        font-weight: 700;

        color: ${props => props.theme['gray-200']};
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: row;
        
        gap: 8px;
    }
`

export const TaskCount = styled.div`
    background-color: ${props => props.theme['gray-500']};

    padding: 2px 8px;
    border-radius: 999px;
    height: 20px;
`

export const Content = styled.div`
    width: 100%;
    max-width: 728px;

    margin: 1.5rem auto 0 auto;

    button {

    }
`

export const NoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 4rem auto 0;
    width: 100%;
    height: 244px;

    border-top: 2px solid ${props => props.theme['gray-300']};
    border-radius: 8px 8px 0 0;

    b {
        margin-top: 1.2rem;
    }

    b, span {
        font-size: 1rem;
        line-height: 1.4rem;

        color: ${props => props.theme['gray-300']};
    }
`