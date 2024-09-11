import Todo from "./Todo";
import { db } from "../utils/db";

function Column(props) {
  const markAsDone = async (id, event) => {
    const newCompleted = event.target.checked ? "true" : "false";
    await db.tasks.update(id, { completed: newCompleted });
    return await db.tasks.get(id);
  };

  const deleteTask = async (id) => {
    await db.tasks.delete(id);
  };

  const columnItems = props.tasks
    .filter(props.map[props.name].filter)
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed === "true"}
        key={task.id}
        toggleTaskCompleted={markAsDone}
        deleteTask={deleteTask}
      />
    ));

  return (
    <div>
      <h2>{props.map[props.name].name}</h2>
      <ul className="taskList">{columnItems}</ul>
    </div>
  );
}

export default Column;
