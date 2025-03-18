import { LuCircle, LuCircleCheckBig, LuTrash2 } from "react-icons/lu";
import { useTheme } from "styled-components";
import { Container, Content, Text } from "./styles";

import { CardProps } from "../../@types/types";

export function Card({ id, isDone, content, SetItemIsDone, DeleteItem}: CardProps) {
    const theme = useTheme()

    return (
            <Container>
                <Content>
                    <button onClick={() => SetItemIsDone(id)}>
                        {!isDone ? <LuCircle color={theme.blue} size={20} style={{paddingTop: '4px'}}/> :
                        <LuCircleCheckBig color={theme['purple-dark']} size={20} style={{paddingTop: '4px'}} />}
                    </button>
                    <Text isDone={isDone}>{content}</Text>
                </Content>
                <div>
                    <button onClick={() => DeleteItem(id)}>
                        <LuTrash2 size={20} color={theme.red} />
                    </button>
                </div>
            </Container>
    )
}