import Todo from "./Todo";
import { db } from "../utils/db";

function Column(props) {
  const markAsDone = async (id, event) => {
    const newCompleted = event.target.checked ? "true" : "false";
    await db.tasks.update(id, {
      completed: newCompleted,
      dateCompleted: new Date(),
    });
    const ans = await db.tasks.get(id);
    console.log(ans);
    return ans;
  };

  const deleteTask = async (id) => {
    await db.tasks.delete(id);
  };

  const columnItems = props.tasks
    .filter(props.map[props.name])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed === "true"}
        key={task.id}
        toggleTaskCompleted={markAsDone}
        deleteTask={deleteTask}
        dateCreated={task.dateCreated}
        dateCompleted={task.dateCompleted}
      />
    ));

  return (
    <div>
      <h2>{props.name}</h2>
      <ul className="taskList">{columnItems}</ul>
    </div>
  );
}

export default Column;
