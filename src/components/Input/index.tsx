import { LuCirclePlus } from "react-icons/lu"
import { Container } from "./styles"
import { InputProps } from "../../@types/types"

export function Input({ createItem }: InputProps) {
    function handleCreateItem() {
        const input = document.querySelector('input')
        if (input) {
            createItem(input.value)
            input.value = ''
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            handleCreateItem()
        }
    }

    return (
        <Container>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onKeyDown={handleKeyDown} 
            />
            <button type="submit" onClick={handleCreateItem}>
                <span>Criar</span>
                <LuCirclePlus fontSize={20} />
            </button>
        </Container>
    )
}