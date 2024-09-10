import { useState } from "react";
import Column from "./Components/Column";
import Prompt from "./Components/Prompt";
import { nanoid } from "nanoid";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./utils/db";

const COLUMN_MAP = {
  "To do": (task) => !task.completed,
  Done: (task) => task.completed,
};

const COLUMN_NAMES = Object.keys(COLUMN_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const Tasks = useLiveQuery(() => db.tasks.toArray());

  const columnList = COLUMN_NAMES.map((name) => (
    <Column
      name={name}
      key={name}
      tasks={tasks}
      setTasks={setTasks}
      map={COLUMN_MAP}
    />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <div className="column-wrap">{columnList}</div>
      <Prompt addTask={addTask} />
    </>
  );
}

export default App;
