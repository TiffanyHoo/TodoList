import { Button } from "antd";
import { TodoFiltersProps } from "../../types/todo";

function TodoFilters({ setFilterType }: TodoFiltersProps) {
  return (
    <div className="btns">
      <Button type="primary" onClick={() => setFilterType("all")}>
        全部
      </Button>
      <Button type="primary" onClick={() => setFilterType("completed")}>
        已完成
      </Button>
      <Button type="primary" onClick={() => setFilterType("doing")}>
        待办
      </Button>
    </div>
  );
}

export default TodoFilters;
