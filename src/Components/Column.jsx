import { useState } from "react";
import Todo from "./Todo";

function Column(props) {
  const columnItems = props.tasks
    .filter(props.map[props.name])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    ));

  function toggleTaskCompleted(id) {
    const updatedTasks = props.tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    props.setTasks(updatedTasks);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <ul>{columnItems}</ul>
    </div>
  );
}

export default Column;
