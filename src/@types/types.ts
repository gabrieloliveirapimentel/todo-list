export interface ListItemProps {
    id: number
    content: string
    isDone: boolean
    createdAt: Date
}

export interface CardProps {
    id: number
    isDone: boolean
    content: string
    SetItemIsDone: (id: number) => void
    DeleteItem: (id: number) => void
}

export interface InputProps {
    createItem: (item: string) => void
}