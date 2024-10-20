export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export type addTodoFunc = (todo: Todo) => void
export type toggleTodoFunc = (id: number) => void
export type deleteTodoFunc = (id: number) => React.MouseEventHandler<HTMLButtonElement>

export interface AddTodoProps {
    addTodo: addTodoFunc;
}

export interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: toggleTodoFunc;
    deleteTodo: deleteTodoFunc;
}

export interface TodoFiltersProps {
    setFilterType: any;
}

