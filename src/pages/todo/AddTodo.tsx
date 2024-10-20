import { useState } from "react";
import { Todo, AddTodoProps } from "../../types/todo";
import { Button, Form, Input } from "antd";

function AddTodo({ addTodo }: AddTodoProps) {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = () => {
    if (title.trim() === "") {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <Form>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onPressEnter={handleSubmit}
      />
      <Button type="primary" style={{ marginTop: 12 }} onClick={handleSubmit}>
        新建
      </Button>
    </Form>
  );
}

export default AddTodo;
