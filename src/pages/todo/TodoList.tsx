import { Button, List } from "antd";
import { TodoListProps } from "../../types/todo";

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
          <Button
            type="link"
            onClick={deleteTodo(todo.id)}
            style={{ marginLeft: 12 }}
          >
            删除
          </Button>
        </List.Item>
      )}
    />
  );
}

export default TodoList;
