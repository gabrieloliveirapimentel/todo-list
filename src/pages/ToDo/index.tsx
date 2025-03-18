import { LuClipboardList } from "react-icons/lu"
import { useTheme } from "styled-components"
import { useEffect, useState } from "react"

import { Card } from "../../components/Card"
import { Input } from "../../components/Input"

import { 
    TaskCount, 
    Heading, 
    Content,
    NoContent,
} from "./styles"

import { ListItemProps } from "../../@types/types"

export function ToDo() {
    const theme  = useTheme()
    const [ listItems, setListItems ] = useState<ListItemProps[]>([])    
    const isDoneCount = listItems.filter(item => item.isDone).length

    const storageList = localStorage.getItem('@ignite-todo:list-items')

    function createItem(item: string) {
        setListItems([
            ...listItems,
            {
                id: listItems.length + 1,
                content: item,
                isDone: false,
                createdAt: new Date()
            }
        ])

        localStorage.setItem('@ignite-todo:list-items', JSON.stringify([
            ...listItems,
            {
                id: listItems.length + 1,
                content: item,
                isDone: false,
                createdAt: new Date()
            }
        ]))
    }

    function ItemIsDone(id: number) {
        const updatedList = listItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isDone: !item.isDone
                }
            }
            return item
        })
        setListItems(updatedList)

        localStorage.setItem('@ignite-todo:list-items', JSON.stringify(updatedList))
    }

    function DeleteItem(id: number) {
        const updatedList = listItems.filter(item => item.id !== id)
        setListItems(updatedList)

        localStorage.setItem('@ignite-todo:list-items', JSON.stringify(updatedList))
    }

    useEffect(() => {
        if (storageList) {
            setListItems(JSON.parse(storageList))
        }
    }, [storageList])



    return (
        <div>
            <Input createItem={createItem}/>
            <Heading>
                <div>
                    <span style={{color: theme.blue}}>Tarefas criadas</span>
                    <TaskCount>
                        <span>{listItems.length}</span>
                    </TaskCount>
                </div>
                <div>
                    <span style={{color: theme.purple}}>Concluídas</span>
                    <TaskCount>
                        <span>{isDoneCount} de {listItems.length}</span>
                    </TaskCount>
                </div>
            </Heading>
            <Content>
                {listItems.length > 0 ? 
                    listItems.map(item => (
                        <Card 
                            id={item.id} 
                            key={item.id} 
                            isDone={item.isDone}
                            content={item.content}
                            DeleteItem={DeleteItem}  
                            SetItemIsDone={ItemIsDone}
                        />
                    ))
                    : 
                    <NoContent>
                        <LuClipboardList size={80} color={theme['gray-400']} />
                        <b>Você ainda não tem tarefas cadastradas</b>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </NoContent>
                }
            </Content>
        </div>
    )
}