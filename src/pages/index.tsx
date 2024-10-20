import JSConfetti from "js-confetti";
import AddTodo from "./todo/AddTodo";
import TodoFilters from "./todo/TodoFilters";
import TodoList from "./todo/TodoList";
import { useState, useEffect } from "react";
import {
  Todo,
  addTodoFunc,
  toggleTodoFunc,
  deleteTodoFunc,
} from "../types/todo";
import "./index.css";

const confetti = new JSConfetti();
const showConfetti = () => {
  confetti.addConfetti();
};

function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finished, setFinished] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>("all");

  const addTodo: addTodoFunc = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const toggleTodo: toggleTodoFunc = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo: deleteTodoFunc =
    (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  const filtereTodos: Todo[] = todos.filter((todo) => {
    if (filterType === "all") {
      return true;
    } else if (filterType === "completed") {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  const handleShowConfetti = () => {
    if (finished) {
      showConfetti();
    }
  };

  useEffect(() => {
    if (todos.length) {
      const doingList = todos.filter((todo) => !todo.completed);

      if (!doingList.length) {
        setFinished(true);
        showConfetti();
        return;
      }
    }
    setFinished(false);
  }, [todos]);

  return (
    <div>
      <h1 onClick={handleShowConfetti}>
        {finished ? "🎉 Congratulations!" : "TodoList"}
      </h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={filtereTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <TodoFilters setFilterType={setFilterType} />
    </div>
  );
}

export default Main;
